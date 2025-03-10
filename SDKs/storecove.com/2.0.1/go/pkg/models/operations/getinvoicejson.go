// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetInvoiceJSONPathParams struct {
	// The guid of the purchase invoice, from the webhook.
	GUID string `pathParam:"style=simple,explode=false,name=guid"`
}

type GetInvoiceJSONQueryParams struct {
	// The PaymentMeans version. The default (and deprecated) version 1.0 will give BankPaymentMean, DirectDebitPaymentMean, CardPaymentMean, NppPaymentMean, SeBankGiroPaymentMean, SePlusGiroPaymentMean, SgCardPaymentMean, SgGiroPaymentMean, SgPaynowPaymentMean.
	//
	// Version 2.0 deprecates BankPaymentMean (now CreditTransferPaymentMean), CardPaymentMean (now CreditCardPaymentMean), NppPaymentMean (now AunzNppPayidPaymentMean), SeBankGiroPaymentMean (now SeBankgiroPaymentMean  -- note the lower 'g' in 'bankgiro'). It also adds OnlinePaymentServicePaymentMean, StandingAgreementPaymentMean, AunzNppPaytoPaymentMean, AunzBpayPaymentMean, AunzPostbillpayPaymentMean, AunzUriPaymentMean.
	Pmv *string `queryParam:"style=form,explode=true,name=pmv"`
}

type GetInvoiceJSONRequest struct {
	PathParams  GetInvoiceJSONPathParams
	QueryParams GetInvoiceJSONQueryParams
}

type GetInvoiceJSONResponse struct {
	ContentType string
	// Success
	PurchaseInvoice *shared.PurchaseInvoice
	StatusCode      int
	RawResponse     *http.Response
}
