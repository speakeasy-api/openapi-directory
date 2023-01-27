package shared

// AuxiliaryNodeGroup
// Node group identification and configuration information.
type AuxiliaryNodeGroup struct {
	NodeGroup   *NodeGroup `json:"nodeGroup,omitempty"`
	NodeGroupID *string    `json:"nodeGroupId,omitempty"`
}

// AuxiliaryNodeGroupInput
// Node group identification and configuration information.
type AuxiliaryNodeGroupInput struct {
	NodeGroup   *NodeGroupInput `json:"nodeGroup,omitempty"`
	NodeGroupID *string         `json:"nodeGroupId,omitempty"`
}
