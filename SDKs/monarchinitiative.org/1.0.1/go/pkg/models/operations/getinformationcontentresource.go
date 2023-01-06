package operations

type GetInformationContentResourcePathParams struct {
	ObjectCategory  string `pathParam:"style=simple,explode=false,name=object_category"`
	SubjectCategory string `pathParam:"style=simple,explode=false,name=subject_category"`
	SubjectTaxon    string `pathParam:"style=simple,explode=false,name=subject_taxon"`
}

type GetInformationContentResourceQueryParams struct {
	Evidence *string `queryParam:"style=form,explode=true,name=evidence"`
}

type GetInformationContentResourceRequest struct {
	PathParams  GetInformationContentResourcePathParams
	QueryParams GetInformationContentResourceQueryParams
}

type GetInformationContentResourceResponse struct {
	ContentType string
	StatusCode  int64
}
