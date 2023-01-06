package operations

import (
	"openapi/pkg/models/shared"
)

type GetAnnotationScoreQueryParams struct {
	AbsentID []string `queryParam:"style=form,explode=true,name=absent_id"`
	ID       []string `queryParam:"style=form,explode=true,name=id"`
}

type GetAnnotationScoreRequest struct {
	QueryParams GetAnnotationScoreQueryParams
}

type GetAnnotationScoreResponse struct {
	ContentType       string
	StatusCode        int64
	SufficiencyOutput *shared.SufficiencyOutput
}
