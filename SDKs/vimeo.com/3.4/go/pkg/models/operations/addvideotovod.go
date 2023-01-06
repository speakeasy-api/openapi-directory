package operations

import (
	"openapi/pkg/models/shared"
)

type AddVideoToVodPathParams struct {
	OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
	VideoID    float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type AddVideoToVodRequestBodyBuyPrice struct {
	AUD *float64 `json:"AUD,omitempty"`
	CAD *float64 `json:"CAD,omitempty"`
	CHF *float64 `json:"CHF,omitempty"`
	DKK *float64 `json:"DKK,omitempty"`
	EUR *float64 `json:"EUR,omitempty"`
	GBP *float64 `json:"GBP,omitempty"`
	JPY *float64 `json:"JPY,omitempty"`
	KRW *float64 `json:"KRW,omitempty"`
	NOK *float64 `json:"NOK,omitempty"`
	PLN *float64 `json:"PLN,omitempty"`
	SEK *float64 `json:"SEK,omitempty"`
	USD *float64 `json:"USD,omitempty"`
}

type AddVideoToVodRequestBodyBuy struct {
	Price *AddVideoToVodRequestBodyBuyPrice `json:"price,omitempty"`
}

type AddVideoToVodRequestBodyRentPrice struct {
	AUD *float64 `json:"AUD,omitempty"`
	CAD *float64 `json:"CAD,omitempty"`
	CHF *float64 `json:"CHF,omitempty"`
	DKK *float64 `json:"DKK,omitempty"`
	EUR *float64 `json:"EUR,omitempty"`
	GBP *float64 `json:"GBP,omitempty"`
	JPY *float64 `json:"JPY,omitempty"`
	KRW *float64 `json:"KRW,omitempty"`
	NOK *float64 `json:"NOK,omitempty"`
	PLN *float64 `json:"PLN,omitempty"`
	SEK *float64 `json:"SEK,omitempty"`
	USD *float64 `json:"USD,omitempty"`
}

type AddVideoToVodRequestBodyRent struct {
	Price *AddVideoToVodRequestBodyRentPrice `json:"price,omitempty"`
}

type AddVideoToVodRequestBodyTypeEnum string

const (
	AddVideoToVodRequestBodyTypeEnumExtra   AddVideoToVodRequestBodyTypeEnum = "extra"
	AddVideoToVodRequestBodyTypeEnumMain    AddVideoToVodRequestBodyTypeEnum = "main"
	AddVideoToVodRequestBodyTypeEnumTrailer AddVideoToVodRequestBodyTypeEnum = "trailer"
)

type AddVideoToVodRequestBody struct {
	Buy         *AddVideoToVodRequestBodyBuy     `json:"buy,omitempty"`
	Position    *float64                         `json:"position,omitempty"`
	ReleaseYear *float64                         `json:"release_year,omitempty"`
	Rent        *AddVideoToVodRequestBodyRent    `json:"rent,omitempty"`
	Type        AddVideoToVodRequestBodyTypeEnum `json:"type"`
}

type AddVideoToVodSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type AddVideoToVodRequest struct {
	PathParams AddVideoToVodPathParams
	Request    AddVideoToVodRequestBody `request:"mediaType=application/vnd.vimeo.ondemand.video+json"`
	Security   AddVideoToVodSecurity
}

type AddVideoToVodResponse struct {
	ContentType   string
	StatusCode    int64
	LegacyError   *shared.LegacyError
	OnDemandVideo *shared.OnDemandVideo
}
