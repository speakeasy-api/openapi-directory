// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
	"time"
)

// DigitalWalletTokenStatusEnum - This indicates if payments can be made with the Digital Wallet Token.
type DigitalWalletTokenStatusEnum string

const (
	DigitalWalletTokenStatusEnumActive      DigitalWalletTokenStatusEnum = "active"
	DigitalWalletTokenStatusEnumInactive    DigitalWalletTokenStatusEnum = "inactive"
	DigitalWalletTokenStatusEnumSuspended   DigitalWalletTokenStatusEnum = "suspended"
	DigitalWalletTokenStatusEnumDeactivated DigitalWalletTokenStatusEnum = "deactivated"
)

func (e DigitalWalletTokenStatusEnum) ToPointer() *DigitalWalletTokenStatusEnum {
	return &e
}

func (e *DigitalWalletTokenStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "active":
		fallthrough
	case "inactive":
		fallthrough
	case "suspended":
		fallthrough
	case "deactivated":
		*e = DigitalWalletTokenStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DigitalWalletTokenStatusEnum: %v", v)
	}
}

// DigitalWalletTokenTokenRequestorEnum - The digital wallet app being used.
type DigitalWalletTokenTokenRequestorEnum string

const (
	DigitalWalletTokenTokenRequestorEnumApplePay  DigitalWalletTokenTokenRequestorEnum = "apple_pay"
	DigitalWalletTokenTokenRequestorEnumGooglePay DigitalWalletTokenTokenRequestorEnum = "google_pay"
)

func (e DigitalWalletTokenTokenRequestorEnum) ToPointer() *DigitalWalletTokenTokenRequestorEnum {
	return &e
}

func (e *DigitalWalletTokenTokenRequestorEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "apple_pay":
		fallthrough
	case "google_pay":
		*e = DigitalWalletTokenTokenRequestorEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DigitalWalletTokenTokenRequestorEnum: %v", v)
	}
}

// DigitalWalletTokenTypeEnum - A constant representing the object's type. For this resource it will always be `digital_wallet_token`.
type DigitalWalletTokenTypeEnum string

const (
	DigitalWalletTokenTypeEnumDigitalWalletToken DigitalWalletTokenTypeEnum = "digital_wallet_token"
)

func (e DigitalWalletTokenTypeEnum) ToPointer() *DigitalWalletTokenTypeEnum {
	return &e
}

func (e *DigitalWalletTokenTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "digital_wallet_token":
		*e = DigitalWalletTokenTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DigitalWalletTokenTypeEnum: %v", v)
	}
}

// DigitalWalletToken - A Digital Wallet Token is created when a user adds a Card to their Apple Pay or Google Pay app. The Digital Wallet Token can be used for purchases just like a Card.
type DigitalWalletToken struct {
	// The identifier for the Card this Digital Wallet Token belongs to.
	CardID string `json:"card_id"`
	// The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the Card was created.
	CreatedAt time.Time `json:"created_at"`
	// The Digital Wallet Token identifier.
	ID string `json:"id"`
	// This indicates if payments can be made with the Digital Wallet Token.
	Status DigitalWalletTokenStatusEnum `json:"status"`
	// The digital wallet app being used.
	TokenRequestor DigitalWalletTokenTokenRequestorEnum `json:"token_requestor"`
	// A constant representing the object's type. For this resource it will always be `digital_wallet_token`.
	Type DigitalWalletTokenTypeEnum `json:"type"`
}
