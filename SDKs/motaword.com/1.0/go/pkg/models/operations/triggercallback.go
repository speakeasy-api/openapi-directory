package operations

import (
	"openapi/pkg/models/shared"
)

type TriggerCallbackActionTypeEnum string

const (
	TriggerCallbackActionTypeEnumTranslated TriggerCallbackActionTypeEnum = "translated"
	TriggerCallbackActionTypeEnumProofread  TriggerCallbackActionTypeEnum = "proofread"
	TriggerCallbackActionTypeEnumCompleted  TriggerCallbackActionTypeEnum = "completed"
)

type TriggerCallbackPathParams struct {
	ActionType TriggerCallbackActionTypeEnum `pathParam:"style=simple,explode=false,name=actionType"`
	ID         int64                         `pathParam:"style=simple,explode=false,name=id"`
}

type TriggerCallbackRequest struct {
	PathParams TriggerCallbackPathParams
}

type TriggerCallbackResponse struct {
	CallbackResult *shared.CallbackResult
	ContentType    string
	Error          *shared.Error
	StatusCode     int64
}
