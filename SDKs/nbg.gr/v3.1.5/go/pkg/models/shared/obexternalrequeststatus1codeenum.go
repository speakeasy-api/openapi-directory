package shared

type ObExternalRequestStatus1CodeEnum string

const (
	OBExternalRequestStatus1CodeEnumAuthorised            ObExternalRequestStatus1CodeEnum = "Authorised"
	OBExternalRequestStatus1CodeEnumAwaitingAuthorisation ObExternalRequestStatus1CodeEnum = "AwaitingAuthorisation"
	OBExternalRequestStatus1CodeEnumRejected              ObExternalRequestStatus1CodeEnum = "Rejected"
	OBExternalRequestStatus1CodeEnumRevoked               ObExternalRequestStatus1CodeEnum = "Revoked"
)
