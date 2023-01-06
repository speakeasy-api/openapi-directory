package shared

// RoutingVpc
// RoutingVPC contains information about the VPC networks associated with the spokes of a Network Connectivity Center hub.
type RoutingVpc struct {
	RequiredForNewSiteToSiteDataTransferSpokes *bool   `json:"requiredForNewSiteToSiteDataTransferSpokes,omitempty"`
	URI                                        *string `json:"uri,omitempty"`
}

// RoutingVpcInput
// RoutingVPC contains information about the VPC networks associated with the spokes of a Network Connectivity Center hub.
type RoutingVpcInput struct {
	URI *string `json:"uri,omitempty"`
}
