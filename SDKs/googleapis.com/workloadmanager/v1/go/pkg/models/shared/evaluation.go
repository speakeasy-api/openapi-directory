package shared

// Evaluation
// Message describing Evaluation object
type Evaluation struct {
	CreateTime     *string           `json:"createTime,omitempty"`
	Description    *string           `json:"description,omitempty"`
	Labels         map[string]string `json:"labels,omitempty"`
	Name           *string           `json:"name,omitempty"`
	ResourceFilter *ResourceFilter   `json:"resourceFilter,omitempty"`
	ResourceStatus *ResourceStatus   `json:"resourceStatus,omitempty"`
	RuleNames      []string          `json:"ruleNames,omitempty"`
	RuleVersions   []string          `json:"ruleVersions,omitempty"`
	UpdateTime     *string           `json:"updateTime,omitempty"`
}

// EvaluationInput
// Message describing Evaluation object
type EvaluationInput struct {
	Description    *string           `json:"description,omitempty"`
	Labels         map[string]string `json:"labels,omitempty"`
	Name           *string           `json:"name,omitempty"`
	ResourceFilter *ResourceFilter   `json:"resourceFilter,omitempty"`
	ResourceStatus *ResourceStatus   `json:"resourceStatus,omitempty"`
	RuleNames      []string          `json:"ruleNames,omitempty"`
}
