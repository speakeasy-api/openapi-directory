package operations

import (
	"openapi/pkg/models/shared"
)

type PostAnnotationScoreRequest struct {
	Request shared.SufficiencyPostInput `request:"mediaType=application/json"`
}

type PostAnnotationScoreResponse struct {
	ContentType       string
	StatusCode        int64
	SufficiencyOutput *shared.SufficiencyOutput
}
