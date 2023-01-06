package operations

type CompanyLogoQueryParams struct {
	Domain string `queryParam:"style=form,explode=true,name=domain"`
}

type CompanyLogoRequest struct {
	QueryParams CompanyLogoQueryParams
}

type CompanyLogoResponse struct {
	ContentType string
	StatusCode  int64
}
