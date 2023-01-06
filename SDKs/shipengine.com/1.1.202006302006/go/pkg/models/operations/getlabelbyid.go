package operations

import (
	"openapi/pkg/models/shared"
)

type GetLabelByIDPathParams struct {
	LabelID string `pathParam:"style=simple,explode=false,name=label_id"`
}

type GetLabelByIDQueryParams struct {
	LabelDownloadType *shared.LabelDownloadTypeEnum `queryParam:"style=form,explode=true,name=label_download_type"`
}

type GetLabelByIDRequest struct {
	PathParams  GetLabelByIDPathParams
	QueryParams GetLabelByIDQueryParams
}

type GetLabelByIDResponseOutput struct {
	ContentType              string
	StatusCode               int64
	ErrorResponseBody        *shared.ErrorResponseBody
	GetLabelByIDResponseBody *shared.GetLabelByIDResponseBodyOutput
}
