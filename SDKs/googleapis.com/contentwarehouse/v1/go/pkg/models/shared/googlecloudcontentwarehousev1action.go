package shared

// GoogleCloudContentwarehouseV1Action
// Represents the action triggered by Rule Engine when the rule is true.
type GoogleCloudContentwarehouseV1Action struct {
	AccessControl          *GoogleCloudContentwarehouseV1AccessControlAction    `json:"accessControl,omitempty"`
	ActionID               *string                                              `json:"actionId,omitempty"`
	AddToFolder            *GoogleCloudContentwarehouseV1AddToFolderAction      `json:"addToFolder,omitempty"`
	DataUpdate             *GoogleCloudContentwarehouseV1DataUpdateAction       `json:"dataUpdate,omitempty"`
	DataValidation         *GoogleCloudContentwarehouseV1DataValidationAction   `json:"dataValidation,omitempty"`
	DeleteDocumentAction   *GoogleCloudContentwarehouseV1DeleteDocumentAction   `json:"deleteDocumentAction,omitempty"`
	PublishToPubSub        *GoogleCloudContentwarehouseV1PublishAction          `json:"publishToPubSub,omitempty"`
	RemoveFromFolderAction *GoogleCloudContentwarehouseV1RemoveFromFolderAction `json:"removeFromFolderAction,omitempty"`
}
