package operations

import (
	"openapi/pkg/models/shared"
)

type LaunchProjectPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type LaunchProjectRequestBodyPaymentMethodEnum string

const (
	LaunchProjectRequestBodyPaymentMethodEnumCorporate     LaunchProjectRequestBodyPaymentMethodEnum = "corporate"
	LaunchProjectRequestBodyPaymentMethodEnumClient        LaunchProjectRequestBodyPaymentMethodEnum = "client"
	LaunchProjectRequestBodyPaymentMethodEnumApp           LaunchProjectRequestBodyPaymentMethodEnum = "app"
	LaunchProjectRequestBodyPaymentMethodEnumCredit        LaunchProjectRequestBodyPaymentMethodEnum = "credit"
	LaunchProjectRequestBodyPaymentMethodEnumCorporateCard LaunchProjectRequestBodyPaymentMethodEnum = "corporate_card"
)

type LaunchProjectRequestBody struct {
	Bin           *string                                    `multipartForm:"name=bin"`
	BudgetCode    *string                                    `multipartForm:"name=budget_code"`
	CardID        *int64                                     `multipartForm:"name=card_id"`
	PaymentCode   *string                                    `multipartForm:"name=payment_code"`
	PaymentMethod *LaunchProjectRequestBodyPaymentMethodEnum `multipartForm:"name=payment_method"`
	StripeToken   *string                                    `multipartForm:"name=stripe_token"`
}

type LaunchProjectRequest struct {
	PathParams LaunchProjectPathParams
	Request    *LaunchProjectRequestBody `request:"mediaType=multipart/form-data"`
}

type LaunchProjectResponse struct {
	ContentType           string
	Error                 *shared.Error
	ProjectLaunchResponse *shared.ProjectLaunchResponse
	StatusCode            int64
}
