package shared

type ObAddressTypeCodeEnum string

const (
	OBAddressTypeCodeEnumBusiness       ObAddressTypeCodeEnum = "Business"
	OBAddressTypeCodeEnumCorrespondence ObAddressTypeCodeEnum = "Correspondence"
	OBAddressTypeCodeEnumDeliveryTo     ObAddressTypeCodeEnum = "DeliveryTo"
	OBAddressTypeCodeEnumMailTo         ObAddressTypeCodeEnum = "MailTo"
	OBAddressTypeCodeEnumPoBox          ObAddressTypeCodeEnum = "POBox"
	OBAddressTypeCodeEnumPostal         ObAddressTypeCodeEnum = "Postal"
	OBAddressTypeCodeEnumResidential    ObAddressTypeCodeEnum = "Residential"
	OBAddressTypeCodeEnumStatement      ObAddressTypeCodeEnum = "Statement"
)
