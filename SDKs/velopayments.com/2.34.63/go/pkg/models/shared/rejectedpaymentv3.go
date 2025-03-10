// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type RejectedPaymentV3 struct {
	// The amount of the payment in minor units
	Amount int64 `json:"amount"`
	// Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
	CurrencyType string `json:"currencyType"`
	// If the payment was submitted in a csv payout then this will be the line number of the payment in the file
	LineNumber *int64 `json:"lineNumber,omitempty"`
	// A more general rejection message than the reason property
	Message *string `json:"message,omitempty"`
	// <p>Metadata about the payment that may be relevant to the specific rails or remote system making the payout</p>
	// <p>The structure of the data will be dictated by the requirements of the payment rails</p>
	//
	PaymentMetadata *string `json:"paymentMetadata,omitempty"`
	// A reference identifier for the payor for the given payee payment
	PayorPaymentID string `json:"payorPaymentId"`
	// The reason for the payment being rejected
	Reason string `json:"reason"`
	// The reason code as determined by Velo
	ReasonCode *string `json:"reasonCode,omitempty"`
	// The remoteId supplied by the payor that identifies the payee
	RemoteID string `json:"remoteId"`
	// <p>The identifier for the remote payments system if not Velo</p>
	//
	RemoteSystemID *string `json:"remoteSystemId,omitempty"`
	// The identifier of the source account to debit the payment from
	SourceAccountName string `json:"sourceAccountName"`
}
