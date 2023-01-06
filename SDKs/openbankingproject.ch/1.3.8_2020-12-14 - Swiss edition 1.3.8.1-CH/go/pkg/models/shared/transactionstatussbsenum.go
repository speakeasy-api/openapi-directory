package shared

type TransactionStatusSbsEnum string

const (
	TransactionStatusSBSEnumAcsc TransactionStatusSbsEnum = "ACSC"
	TransactionStatusSBSEnumActc TransactionStatusSbsEnum = "ACTC"
	TransactionStatusSBSEnumPatc TransactionStatusSbsEnum = "PATC"
	TransactionStatusSBSEnumRcvd TransactionStatusSbsEnum = "RCVD"
	TransactionStatusSBSEnumRjct TransactionStatusSbsEnum = "RJCT"
	TransactionStatusSBSEnumCanc TransactionStatusSbsEnum = "CANC"
)
