package operations

import (
	"openapi/pkg/models/shared"
)

type GeocodeAddressRequestBodyOutputCaseEnum string

const (
	GeocodeAddressRequestBodyOutputCaseEnumCamel GeocodeAddressRequestBodyOutputCaseEnum = "camel"
)

type GeocodeAddressRequestBody struct {
	Address      *string                                  `form:"name=address"`
	City         *string                                  `form:"name=city"`
	CountryCode  *string                                  `form:"name=country-code"`
	County       *string                                  `form:"name=county"`
	FuzzySearch  *bool                                    `form:"name=fuzzy-search"`
	HouseNumber  *string                                  `form:"name=house-number"`
	LanguageCode *string                                  `form:"name=language-code"`
	OutputCase   *GeocodeAddressRequestBodyOutputCaseEnum `form:"name=output-case"`
	PostalCode   *string                                  `form:"name=postal-code"`
	State        *string                                  `form:"name=state"`
	Street       *string                                  `form:"name=street"`
}

type GeocodeAddressRequest struct {
	Request *GeocodeAddressRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type GeocodeAddressResponse struct {
	APIError               *shared.APIError
	ContentType            string
	GeocodeAddressResponse *shared.GeocodeAddressResponse
	StatusCode             int64
}
