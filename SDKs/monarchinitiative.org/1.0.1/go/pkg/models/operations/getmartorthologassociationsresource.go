package operations

type GetMartOrthologAssociationsResourcePathParams struct {
	Taxon1 string `pathParam:"style=simple,explode=false,name=taxon1"`
	Taxon2 string `pathParam:"style=simple,explode=false,name=taxon2"`
}

type GetMartOrthologAssociationsResourceRequest struct {
	PathParams GetMartOrthologAssociationsResourcePathParams
}

type GetMartOrthologAssociationsResourceResponse struct {
	ContentType string
	StatusCode  int64
}
