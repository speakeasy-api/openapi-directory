package operations

import (
	"openapi/pkg/models/shared"
)

type CreateReturnLabelPathParams struct {
	LabelID string `pathParam:"style=simple,explode=false,name=label_id"`
}

type CreateReturnLabelRequest struct {
	PathParams CreateReturnLabelPathParams
	Request    shared.CreateReturnLabelRequestBody `request:"mediaType=application/json"`
}

type CreateReturnLabelResponseOutput struct {
	ContentType                   string
	StatusCode                    int64
	CreateReturnLabelResponseBody *shared.CreateReturnLabelResponseBodyOutput
	ErrorResponseBody             *shared.ErrorResponseBody
}
