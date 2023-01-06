package operations

type GetMartDiseaseAssociationsResourcePathParams struct {
	ObjectCategory string `pathParam:"style=simple,explode=false,name=object_category"`
	Taxon          string `pathParam:"style=simple,explode=false,name=taxon"`
}

type GetMartDiseaseAssociationsResourceQueryParams struct {
	Slim []string `queryParam:"style=form,explode=true,name=slim"`
}

type GetMartDiseaseAssociationsResourceRequest struct {
	PathParams  GetMartDiseaseAssociationsResourcePathParams
	QueryParams GetMartDiseaseAssociationsResourceQueryParams
}

type GetMartDiseaseAssociationsResourceResponse struct {
	ContentType string
	StatusCode  int64
}
