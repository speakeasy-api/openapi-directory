package operations

import (
	"openapi/pkg/models/shared"
)

type GetLabelByExternalShipmentIDPathParams struct {
	ExternalShipmentID string `pathParam:"style=simple,explode=false,name=external_shipment_id"`
}

type GetLabelByExternalShipmentIDQueryParams struct {
	LabelDownloadType *shared.LabelDownloadTypeEnum `queryParam:"style=form,explode=true,name=label_download_type"`
}

type GetLabelByExternalShipmentIDRequest struct {
	PathParams  GetLabelByExternalShipmentIDPathParams
	QueryParams GetLabelByExternalShipmentIDQueryParams
}

type GetLabelByExternalShipmentIDResponseOutput struct {
	ContentType                              string
	StatusCode                               int64
	ErrorResponseBody                        *shared.ErrorResponseBody
	GetLabelByExternalShipmentIDResponseBody *shared.GetLabelByExternalShipmentIDResponseBodyOutput
}
