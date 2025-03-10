// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetAllCompanyCodesAndDescriptionsByResourceSecurity struct {
	PaylocityAuth string `security:"scheme,type=oauth2,name=Authorization"`
}

type GetAllCompanyCodesAndDescriptionsByResourceRequest struct {
	// Type of Company Code. Common values costcenter1, costcenter2, costcenter3, deductions, earnings, taxes, paygrade, positions.
	CodeResource string `pathParam:"style=simple,explode=false,name=codeResource"`
	// Company Id
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetAllCompanyCodesAndDescriptionsByResourceResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Successfully retrieved
	CompanyCodes []shared.CompanyCodes
	// Invalid Code Resource
	Errors []shared.Error
}
