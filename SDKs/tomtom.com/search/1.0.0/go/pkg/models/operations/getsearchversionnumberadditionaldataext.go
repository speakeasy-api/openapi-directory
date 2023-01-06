package operations

import (
	"openapi/pkg/models/shared"
)

type GetSearchVersionNumberAdditionalDataExtPathParams struct {
	Ext           shared.VersionNumberEnum `pathParam:"style=simple,explode=false,name=ext"`
	VersionNumber int64                    `pathParam:"style=simple,explode=false,name=versionNumber"`
}

type GetSearchVersionNumberAdditionalDataExtQueryParams struct {
	Geometries     string `queryParam:"style=form,explode=true,name=geometries"`
	GeometriesZoom *int64 `queryParam:"style=form,explode=true,name=geometriesZoom"`
}

type GetSearchVersionNumberAdditionalDataExtRequest struct {
	PathParams  GetSearchVersionNumberAdditionalDataExtPathParams
	QueryParams GetSearchVersionNumberAdditionalDataExtQueryParams
}

type GetSearchVersionNumberAdditionalDataExtResponse struct {
	ContentType string
	StatusCode  int64
}
