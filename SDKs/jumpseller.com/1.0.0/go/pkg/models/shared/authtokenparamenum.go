package shared

type AuthtokenParamEnum string

const (
	AuthtokenParamEnumAbandoned      AuthtokenParamEnum = "Abandoned"
	AuthtokenParamEnumCanceled       AuthtokenParamEnum = "Canceled"
	AuthtokenParamEnumPendingPayment AuthtokenParamEnum = "Pending Payment"
	AuthtokenParamEnumPaid           AuthtokenParamEnum = "Paid"
)
