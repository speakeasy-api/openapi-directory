package shared

type AncillaryServiceEndorsementEnum string

const (
	AncillaryServiceEndorsementEnumNone                       AncillaryServiceEndorsementEnum = "none"
	AncillaryServiceEndorsementEnumReturnServiceRequested     AncillaryServiceEndorsementEnum = "return_service_requested"
	AncillaryServiceEndorsementEnumForwardingServiceRequested AncillaryServiceEndorsementEnum = "forwarding_service_requested"
	AncillaryServiceEndorsementEnumAddressServiceRequested    AncillaryServiceEndorsementEnum = "address_service_requested"
	AncillaryServiceEndorsementEnumChangeServiceRequested     AncillaryServiceEndorsementEnum = "change_service_requested"
	AncillaryServiceEndorsementEnumLeaveIfNoResponse          AncillaryServiceEndorsementEnum = "leave_if_no_response"
)
