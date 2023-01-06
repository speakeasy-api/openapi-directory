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

type TrainProjectRequests struct {
	ApplicationXML      []byte                     `request:"mediaType=application/xml"`
	TextXML             []byte                     `request:"mediaType=text/xml"`
	TrainingParameters  *shared.TrainingParameters `request:"mediaType=application/json"`
	TrainingParameters1 *shared.TrainingParameters `request:"mediaType=application/x-www-form-urlencoded"`
}

type TrainProjectRequest struct {
	PathParams  TrainProjectPathParams
	QueryParams TrainProjectQueryParams
	Request     *TrainProjectRequests
}

type TrainProjectResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	Iteration         *shared.Iteration
	StatusCode        int64
}
