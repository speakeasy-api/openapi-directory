package shared

import (
	"time"
)

type VariableLinks struct {
	Labels *string `json:"labels,omitempty"`
	Org    *string `json:"org,omitempty"`
	Self   *string `json:"self,omitempty"`
}

type Variable struct {
	Arguments   map[string]interface{} `json:"arguments"`
	CreatedAt   *time.Time             `json:"createdAt,omitempty"`
	Description *string                `json:"description,omitempty"`
	ID          *string                `json:"id,omitempty"`
	Labels      []Label                `json:"labels,omitempty"`
	Links       *VariableLinks         `json:"links,omitempty"`
	Name        string                 `json:"name"`
	OrgID       string                 `json:"orgID"`
	Selected    []string               `json:"selected,omitempty"`
	UpdatedAt   *time.Time             `json:"updatedAt,omitempty"`
}

type VariableInput struct {
	Arguments   map[string]interface{} `json:"arguments"`
	CreatedAt   *time.Time             `json:"createdAt,omitempty"`
	Description *string                `json:"description,omitempty"`
	Labels      []LabelInput           `json:"labels,omitempty"`
	Name        string                 `json:"name"`
	OrgID       string                 `json:"orgID"`
	Selected    []string               `json:"selected,omitempty"`
	UpdatedAt   *time.Time             `json:"updatedAt,omitempty"`
}
