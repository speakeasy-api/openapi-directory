package shared

type CreateWorkflowTemplateEnum string

const (
	CreateWorkflowTemplateEnumFailover CreateWorkflowTemplateEnum = "failover"
)

type CreateWorkflow struct {
	Template *CreateWorkflowTemplateEnum `json:"template,omitempty"`
	Workflow []interface{}               `json:"workflow,omitempty"`
}
