package operations

import (
	"openapi/pkg/models/shared"
)

type GetImageRegionProposalsPathParams struct {
	ImageID   string `pathParam:"style=simple,explode=false,name=imageId"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetImageRegionProposalsRequest struct {
	PathParams GetImageRegionProposalsPathParams
}

type GetImageRegionProposalsResponse struct {
	ContentType         string
	CustomVisionError   *shared.CustomVisionError
	ImageRegionProposal *shared.ImageRegionProposal
	StatusCode          int64
}
