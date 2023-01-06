package operations

import (
	"openapi/pkg/models/shared"
)

type PostImproveRequests struct {
	ImprovementProgramJSON      *shared.ImprovementProgramJSON      `request:"mediaType=application/json"`
	ImprovementProgramJson1     *shared.ImprovementProgramJSON      `request:"mediaType=application/x-www-form-urlencoded"`
	ImprovementProgramMultipart *shared.ImprovementProgramMultipart `request:"mediaType=multipart/form-data"`
}

type PostImproveRequest struct {
	Request PostImproveRequests
}

type PostImproveResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
