package shared

type ContactCenterStateEnum string

const (
	ContactCenterStateEnumStateUnspecified       ContactCenterStateEnum = "STATE_UNSPECIFIED"
	ContactCenterStateEnumStateDeploying         ContactCenterStateEnum = "STATE_DEPLOYING"
	ContactCenterStateEnumStateDeployed          ContactCenterStateEnum = "STATE_DEPLOYED"
	ContactCenterStateEnumStateTerminating       ContactCenterStateEnum = "STATE_TERMINATING"
	ContactCenterStateEnumStateFailed            ContactCenterStateEnum = "STATE_FAILED"
	ContactCenterStateEnumStateTerminatingFailed ContactCenterStateEnum = "STATE_TERMINATING_FAILED"
	ContactCenterStateEnumStateTerminated        ContactCenterStateEnum = "STATE_TERMINATED"
)

// ContactCenterInput
// Message describing ContactCenter object
type ContactCenterInput struct {
	CcaipManagedUsers    *bool             `json:"ccaipManagedUsers,omitempty"`
	CustomerDomainPrefix *string           `json:"customerDomainPrefix,omitempty"`
	DisplayName          *string           `json:"displayName,omitempty"`
	InstanceConfig       *InstanceConfig   `json:"instanceConfig,omitempty"`
	Labels               map[string]string `json:"labels,omitempty"`
	Name                 *string           `json:"name,omitempty"`
	SamlParams           *SamlParams       `json:"samlParams,omitempty"`
	Uris                 *UrIs             `json:"uris,omitempty"`
	UserEmail            *string           `json:"userEmail,omitempty"`
}

// ContactCenter
// Message describing ContactCenter object
type ContactCenter struct {
	CcaipManagedUsers    *bool                   `json:"ccaipManagedUsers,omitempty"`
	CreateTime           *string                 `json:"createTime,omitempty"`
	CustomerDomainPrefix *string                 `json:"customerDomainPrefix,omitempty"`
	DisplayName          *string                 `json:"displayName,omitempty"`
	InstanceConfig       *InstanceConfig         `json:"instanceConfig,omitempty"`
	Labels               map[string]string       `json:"labels,omitempty"`
	Name                 *string                 `json:"name,omitempty"`
	SamlParams           *SamlParams             `json:"samlParams,omitempty"`
	State                *ContactCenterStateEnum `json:"state,omitempty"`
	UpdateTime           *string                 `json:"updateTime,omitempty"`
	Uris                 *UrIs                   `json:"uris,omitempty"`
	UserEmail            *string                 `json:"userEmail,omitempty"`
}
