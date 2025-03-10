// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

// CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum - Authorization type for user. Can be 'Guest' or '802.1X' for wireless networks, or 'Client VPN' for wired networks. Defaults to '802.1X'.
type CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum string

const (
	CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnumEightHundredAndTwo1X CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum = "802.1X"
	CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnumClientVpn            CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum = "Client VPN"
	CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnumGuest                CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum = "Guest"
)

func (e *CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "802.1X":
		fallthrough
	case "Client VPN":
		fallthrough
	case "Guest":
		*e = CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum: %s", s)
	}
}

type CreateNetworkMerakiAuthUserRequestBodyAuthorizations struct {
	// Date for authorization to expire. Set to 'Never' for the authorization to not expire, which is the default.
	ExpiresAt *string `json:"expiresAt,omitempty"`
	// Required for wireless networks. The SSID for which the user is being authorized, which must be configured for the user's given accountType.
	SsidNumber *int64 `json:"ssidNumber,omitempty"`
}

type CreateNetworkMerakiAuthUserRequestBody struct {
	// Authorization type for user. Can be 'Guest' or '802.1X' for wireless networks, or 'Client VPN' for wired networks. Defaults to '802.1X'.
	AccountType *CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum `json:"accountType,omitempty"`
	// Authorization zones and expiration dates for the user.
	Authorizations []CreateNetworkMerakiAuthUserRequestBodyAuthorizations `json:"authorizations"`
	// Email address of the user
	Email string `json:"email"`
	// Whether or not Meraki should email the password to user. Default is false.
	EmailPasswordToUser *bool `json:"emailPasswordToUser,omitempty"`
	// Whether or not the user is a Dashboard administrator.
	IsAdmin *bool `json:"isAdmin,omitempty"`
	// Name of the user. Only required If the user is not a Dashboard administrator.
	Name *string `json:"name,omitempty"`
	// The password for this user account. Only required If the user is not a Dashboard administrator.
	Password *string `json:"password,omitempty"`
}

type CreateNetworkMerakiAuthUserRequest struct {
	RequestBody CreateNetworkMerakiAuthUserRequestBody `request:"mediaType=application/json"`
	NetworkID   string                                 `pathParam:"style=simple,explode=false,name=networkId"`
}

type CreateNetworkMerakiAuthUser201ApplicationJSONAuthorizations struct {
	// User is authorized by the account email address
	AuthorizedByEmail *string `json:"authorizedByEmail,omitempty"`
	// User is authorized by the account name
	AuthorizedByName *string `json:"authorizedByName,omitempty"`
	// Authorized zone of the user
	AuthorizedZone *string `json:"authorizedZone,omitempty"`
	// Authorization expiration time
	ExpiresAt *time.Time `json:"expiresAt,omitempty"`
	// SSID number
	SsidNumber *int64 `json:"ssidNumber,omitempty"`
}

// CreateNetworkMerakiAuthUser201ApplicationJSON - Successful operation
type CreateNetworkMerakiAuthUser201ApplicationJSON struct {
	// Authorization type for user.
	AccountType *string `json:"accountType,omitempty"`
	// User authorization info
	Authorizations []CreateNetworkMerakiAuthUser201ApplicationJSONAuthorizations `json:"authorizations,omitempty"`
	// Creation time of the user
	CreatedAt *time.Time `json:"createdAt,omitempty"`
	// Email address of the user
	Email *string `json:"email,omitempty"`
	// Meraki auth user id
	ID *string `json:"id,omitempty"`
	// Whether or not the user is a Dashboard administrator
	IsAdmin *bool `json:"isAdmin,omitempty"`
	// Name of the user
	Name *string `json:"name,omitempty"`
}

type CreateNetworkMerakiAuthUserResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Successful operation
	CreateNetworkMerakiAuthUser201ApplicationJSONObject *CreateNetworkMerakiAuthUser201ApplicationJSON
}
