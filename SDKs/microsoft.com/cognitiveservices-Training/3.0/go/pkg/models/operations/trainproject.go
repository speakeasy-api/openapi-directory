package operations

import (
	"openapi/pkg/models/shared"
)

type TrainProjectPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type TrainProjectTrainingTypeEnum string

const (
	TrainProjectTrainingTypeEnumRegular  TrainProjectTrainingTypeEnum = "Regular"
	TrainProjectTrainingTypeEnumAdvanced TrainProjectTrainingTypeEnum = "Advanced"
)

type TrainProjectQueryParams struct {
	ForceTrain               *bool                         `queryParam:"style=form,explode=true,name=forceTrain"`
	NotificationEmailAddress *string                       `queryParam:"style=form,explode=true,name=notificationEmailAddress"`
	ReservedBudgetInHours    *int32                        `queryParam:"style=form,explode=true,name=reservedBudgetInHours"`
	TrainingType             *TrainProjectTrainingTypeEnum `queryParam:"style=form,explode=true,name=trainingType"`
}

type TrainProjectHeaders struct {
	TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
}

type TrainProjectRequest struct {
	PathParams  TrainProjectPathParams
	QueryParams TrainProjectQueryParams
	Headers     TrainProjectHeaders
}

type TrainProjectResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	Iteration         *shared.Iteration
	StatusCode        int64
}
