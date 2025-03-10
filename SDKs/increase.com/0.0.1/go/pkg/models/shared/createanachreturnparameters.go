// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// CreateAnAchReturnParametersReasonEnum - The reason why this transfer will be returned. The most usual return codes are `payment_stopped` for debits and `credit_entry_refused_by_receiver` for credits.
type CreateAnAchReturnParametersReasonEnum string

const (
	CreateAnAchReturnParametersReasonEnumAuthorizationRevokedByCustomer                              CreateAnAchReturnParametersReasonEnum = "authorization_revoked_by_customer"
	CreateAnAchReturnParametersReasonEnumPaymentStopped                                              CreateAnAchReturnParametersReasonEnum = "payment_stopped"
	CreateAnAchReturnParametersReasonEnumCustomerAdvisedUnauthorizedImproperIneligibleOrIncomplete   CreateAnAchReturnParametersReasonEnum = "customer_advised_unauthorized_improper_ineligible_or_incomplete"
	CreateAnAchReturnParametersReasonEnumRepresentativePayeeDeceasedOrUnableToContinueInThatCapacity CreateAnAchReturnParametersReasonEnum = "representative_payee_deceased_or_unable_to_continue_in_that_capacity"
	CreateAnAchReturnParametersReasonEnumBeneficiaryOrAccountHolderDeceased                          CreateAnAchReturnParametersReasonEnum = "beneficiary_or_account_holder_deceased"
	CreateAnAchReturnParametersReasonEnumCreditEntryRefusedByReceiver                                CreateAnAchReturnParametersReasonEnum = "credit_entry_refused_by_receiver"
	CreateAnAchReturnParametersReasonEnumDuplicateEntry                                              CreateAnAchReturnParametersReasonEnum = "duplicate_entry"
	CreateAnAchReturnParametersReasonEnumCorporateCustomerAdvisedNotAuthorized                       CreateAnAchReturnParametersReasonEnum = "corporate_customer_advised_not_authorized"
)

func (e CreateAnAchReturnParametersReasonEnum) ToPointer() *CreateAnAchReturnParametersReasonEnum {
	return &e
}

func (e *CreateAnAchReturnParametersReasonEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "authorization_revoked_by_customer":
		fallthrough
	case "payment_stopped":
		fallthrough
	case "customer_advised_unauthorized_improper_ineligible_or_incomplete":
		fallthrough
	case "representative_payee_deceased_or_unable_to_continue_in_that_capacity":
		fallthrough
	case "beneficiary_or_account_holder_deceased":
		fallthrough
	case "credit_entry_refused_by_receiver":
		fallthrough
	case "duplicate_entry":
		fallthrough
	case "corporate_customer_advised_not_authorized":
		*e = CreateAnAchReturnParametersReasonEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CreateAnAchReturnParametersReasonEnum: %v", v)
	}
}

type CreateAnAchReturnParameters struct {
	// The reason why this transfer will be returned. The most usual return codes are `payment_stopped` for debits and `credit_entry_refused_by_receiver` for credits.
	Reason CreateAnAchReturnParametersReasonEnum `json:"reason"`
	// The transaction identifier of the Inbound ACH Transfer to return to the originating financial institution.
	TransactionID string `json:"transaction_id"`
}
