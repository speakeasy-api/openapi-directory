// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// PostUsersIDAccountsRequestBodyTypeEnum - The type of the account.
type PostUsersIDAccountsRequestBodyTypeEnum string

const (
	PostUsersIDAccountsRequestBodyTypeEnumBank           PostUsersIDAccountsRequestBodyTypeEnum = "bank"
	PostUsersIDAccountsRequestBodyTypeEnumCredits        PostUsersIDAccountsRequestBodyTypeEnum = "credits"
	PostUsersIDAccountsRequestBodyTypeEnumCash           PostUsersIDAccountsRequestBodyTypeEnum = "cash"
	PostUsersIDAccountsRequestBodyTypeEnumLoans          PostUsersIDAccountsRequestBodyTypeEnum = "loans"
	PostUsersIDAccountsRequestBodyTypeEnumMortgage       PostUsersIDAccountsRequestBodyTypeEnum = "mortgage"
	PostUsersIDAccountsRequestBodyTypeEnumStocks         PostUsersIDAccountsRequestBodyTypeEnum = "stocks"
	PostUsersIDAccountsRequestBodyTypeEnumVehicle        PostUsersIDAccountsRequestBodyTypeEnum = "vehicle"
	PostUsersIDAccountsRequestBodyTypeEnumProperty       PostUsersIDAccountsRequestBodyTypeEnum = "property"
	PostUsersIDAccountsRequestBodyTypeEnumInsurance      PostUsersIDAccountsRequestBodyTypeEnum = "insurance"
	PostUsersIDAccountsRequestBodyTypeEnumOtherAsset     PostUsersIDAccountsRequestBodyTypeEnum = "other_asset"
	PostUsersIDAccountsRequestBodyTypeEnumOtherLiability PostUsersIDAccountsRequestBodyTypeEnum = "other_liability"
)

func (e PostUsersIDAccountsRequestBodyTypeEnum) ToPointer() *PostUsersIDAccountsRequestBodyTypeEnum {
	return &e
}

func (e *PostUsersIDAccountsRequestBodyTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "bank":
		fallthrough
	case "credits":
		fallthrough
	case "cash":
		fallthrough
	case "loans":
		fallthrough
	case "mortgage":
		fallthrough
	case "stocks":
		fallthrough
	case "vehicle":
		fallthrough
	case "property":
		fallthrough
	case "insurance":
		fallthrough
	case "other_asset":
		fallthrough
	case "other_liability":
		*e = PostUsersIDAccountsRequestBodyTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PostUsersIDAccountsRequestBodyTypeEnum: %v", v)
	}
}

type PostUsersIDAccountsRequestBody struct {
	// A currency code for the account.
	CurrencyCode string `json:"currency_code"`
	// The ID of the institution to create this account in.
	InstitutionID int64 `json:"institution_id"`
	// A title for the account.
	Title string `json:"title"`
	// The type of the account.
	Type PostUsersIDAccountsRequestBodyTypeEnum `json:"type"`
}

type PostUsersIDAccountsRequest struct {
	RequestBody *PostUsersIDAccountsRequestBody `request:"mediaType=application/json"`
	// The unique identifier of the user.
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostUsersIDAccountsResponse struct {
	// Success
	Account     *shared.Account
	ContentType string
	// Not Allowed
	Error       *shared.Error
	StatusCode  int
	RawResponse *http.Response
}
