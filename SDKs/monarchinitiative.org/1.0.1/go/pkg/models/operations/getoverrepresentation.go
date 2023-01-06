package operations

type GetOverRepresentationQueryParams struct {
	Background      []string `queryParam:"style=form,explode=true,name=background"`
	MaxPValue       *string  `queryParam:"style=form,explode=true,name=max_p_value"`
	ObjectCategory  *string  `queryParam:"style=form,explode=true,name=object_category"`
	Ontology        *string  `queryParam:"style=form,explode=true,name=ontology"`
	Subject         []string `queryParam:"style=form,explode=true,name=subject"`
	SubjectCategory *string  `queryParam:"style=form,explode=true,name=subject_category"`
	Taxon           *string  `queryParam:"style=form,explode=true,name=taxon"`
}

type GetOverRepresentationRequest struct {
	QueryParams GetOverRepresentationQueryParams
}

type GetOverRepresentationResponse struct {
	ContentType string
	StatusCode  int64
}
