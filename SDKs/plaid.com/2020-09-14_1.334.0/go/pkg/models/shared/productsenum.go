// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// ProductsEnum - A list of products that an institution can support. All Items must be initialized with at least one product. The Balance product is always available and does not need to be specified during initialization.
type ProductsEnum string

const (
	ProductsEnumAssets                ProductsEnum = "assets"
	ProductsEnumAuth                  ProductsEnum = "auth"
	ProductsEnumBalance               ProductsEnum = "balance"
	ProductsEnumIdentity              ProductsEnum = "identity"
	ProductsEnumInvestments           ProductsEnum = "investments"
	ProductsEnumLiabilities           ProductsEnum = "liabilities"
	ProductsEnumPaymentInitiation     ProductsEnum = "payment_initiation"
	ProductsEnumIdentityVerification  ProductsEnum = "identity_verification"
	ProductsEnumTransactions          ProductsEnum = "transactions"
	ProductsEnumCreditDetails         ProductsEnum = "credit_details"
	ProductsEnumIncome                ProductsEnum = "income"
	ProductsEnumIncomeVerification    ProductsEnum = "income_verification"
	ProductsEnumDepositSwitch         ProductsEnum = "deposit_switch"
	ProductsEnumStandingOrders        ProductsEnum = "standing_orders"
	ProductsEnumTransfer              ProductsEnum = "transfer"
	ProductsEnumEmployment            ProductsEnum = "employment"
	ProductsEnumRecurringTransactions ProductsEnum = "recurring_transactions"
)

func (e *ProductsEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "assets":
		fallthrough
	case "auth":
		fallthrough
	case "balance":
		fallthrough
	case "identity":
		fallthrough
	case "investments":
		fallthrough
	case "liabilities":
		fallthrough
	case "payment_initiation":
		fallthrough
	case "identity_verification":
		fallthrough
	case "transactions":
		fallthrough
	case "credit_details":
		fallthrough
	case "income":
		fallthrough
	case "income_verification":
		fallthrough
	case "deposit_switch":
		fallthrough
	case "standing_orders":
		fallthrough
	case "transfer":
		fallthrough
	case "employment":
		fallthrough
	case "recurring_transactions":
		*e = ProductsEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for ProductsEnum: %s", s)
	}
}
