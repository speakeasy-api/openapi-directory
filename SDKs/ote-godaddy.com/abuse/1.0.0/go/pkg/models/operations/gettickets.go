package operations

type GetTicketsTypeEnum string

const (
	GetTicketsTypeEnumARecord      GetTicketsTypeEnum = "A_RECORD"
	GetTicketsTypeEnumChildAbuse   GetTicketsTypeEnum = "CHILD_ABUSE"
	GetTicketsTypeEnumContent      GetTicketsTypeEnum = "CONTENT"
	GetTicketsTypeEnumFraudWire    GetTicketsTypeEnum = "FRAUD_WIRE"
	GetTicketsTypeEnumIPBlock      GetTicketsTypeEnum = "IP_BLOCK"
	GetTicketsTypeEnumMalware      GetTicketsTypeEnum = "MALWARE"
	GetTicketsTypeEnumNetworkAbuse GetTicketsTypeEnum = "NETWORK_ABUSE"
	GetTicketsTypeEnumPhishing     GetTicketsTypeEnum = "PHISHING"
	GetTicketsTypeEnumSpam         GetTicketsTypeEnum = "SPAM"
)

type GetTicketsQueryParams struct {
	Closed           *bool               `queryParam:"style=form,explode=true,name=closed"`
	CreatedEnd       *string             `queryParam:"style=form,explode=true,name=createdEnd"`
	CreatedStart     *string             `queryParam:"style=form,explode=true,name=createdStart"`
	Limit            *int64              `queryParam:"style=form,explode=true,name=limit"`
	Offset           *int64              `queryParam:"style=form,explode=true,name=offset"`
	SourceDomainOrIP *string             `queryParam:"style=form,explode=true,name=sourceDomainOrIp"`
	Target           *string             `queryParam:"style=form,explode=true,name=target"`
	Type             *GetTicketsTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetTicketsRequest struct {
	QueryParams GetTicketsQueryParams
}

type GetTicketsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
