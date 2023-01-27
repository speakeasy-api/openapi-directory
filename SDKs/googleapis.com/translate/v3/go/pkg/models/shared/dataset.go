package shared

// Dataset
// A dataset that hosts the examples (sentence pairs) used for translation models.
type Dataset struct {
	CreateTime           *string `json:"createTime,omitempty"`
	DisplayName          *string `json:"displayName,omitempty"`
	ExampleCount         *int32  `json:"exampleCount,omitempty"`
	Name                 *string `json:"name,omitempty"`
	SourceLanguageCode   *string `json:"sourceLanguageCode,omitempty"`
	TargetLanguageCode   *string `json:"targetLanguageCode,omitempty"`
	TestExampleCount     *int32  `json:"testExampleCount,omitempty"`
	TrainExampleCount    *int32  `json:"trainExampleCount,omitempty"`
	UpdateTime           *string `json:"updateTime,omitempty"`
	ValidateExampleCount *int32  `json:"validateExampleCount,omitempty"`
}

// DatasetInput
// A dataset that hosts the examples (sentence pairs) used for translation models.
type DatasetInput struct {
	DisplayName        *string `json:"displayName,omitempty"`
	Name               *string `json:"name,omitempty"`
	SourceLanguageCode *string `json:"sourceLanguageCode,omitempty"`
	TargetLanguageCode *string `json:"targetLanguageCode,omitempty"`
}
