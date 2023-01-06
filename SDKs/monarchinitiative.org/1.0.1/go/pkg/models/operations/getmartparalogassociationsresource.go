package operations

type GetMartParalogAssociationsResourcePathParams struct {
	Taxon1 string `pathParam:"style=simple,explode=false,name=taxon1"`
	Taxon2 string `pathParam:"style=simple,explode=false,name=taxon2"`
}

type GetMartParalogAssociationsResourceRequest struct {
	PathParams GetMartParalogAssociationsResourcePathParams
}

type GetMartParalogAssociationsResourceResponse struct {
	ContentType string
	StatusCode  int64
}
