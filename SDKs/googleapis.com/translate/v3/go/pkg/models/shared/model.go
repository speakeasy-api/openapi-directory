package shared

// Model
// A trained translation model.
type Model struct {
	CreateTime           *string `json:"createTime,omitempty"`
	Dataset              *string `json:"dataset,omitempty"`
	DeployTime           *string `json:"deployTime,omitempty"`
	DisplayName          *string `json:"displayName,omitempty"`
	Name                 *string `json:"name,omitempty"`
	SourceLanguageCode   *string `json:"sourceLanguageCode,omitempty"`
	TargetLanguageCode   *string `json:"targetLanguageCode,omitempty"`
	TestExampleCount     *int32  `json:"testExampleCount,omitempty"`
	TrainExampleCount    *int32  `json:"trainExampleCount,omitempty"`
	UpdateTime           *string `json:"updateTime,omitempty"`
	ValidateExampleCount *int32  `json:"validateExampleCount,omitempty"`
}

// ModelInput
// A trained translation model.
type ModelInput struct {
	Dataset     *string `json:"dataset,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Name        *string `json:"name,omitempty"`
}
