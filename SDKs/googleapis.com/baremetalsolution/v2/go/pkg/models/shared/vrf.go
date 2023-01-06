package shared

type VrfStateEnum string

const (
	VRFStateEnumStateUnspecified VrfStateEnum = "STATE_UNSPECIFIED"
	VRFStateEnumProvisioning     VrfStateEnum = "PROVISIONING"
	VRFStateEnumProvisioned      VrfStateEnum = "PROVISIONED"
)

// Vrf
// A network VRF.
type Vrf struct {
	Name            *string          `json:"name,omitempty"`
	QosPolicy       *QosPolicy       `json:"qosPolicy,omitempty"`
	State           *VrfStateEnum    `json:"state,omitempty"`
	VlanAttachments []VlanAttachment `json:"vlanAttachments,omitempty"`
}
