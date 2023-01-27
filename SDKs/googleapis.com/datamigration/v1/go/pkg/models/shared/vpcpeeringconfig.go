package shared

// VpcPeeringConfig
// The VPC Peering configuration is used to create VPC peering with the consumer's VPC.
type VpcPeeringConfig struct {
	Subnet  *string `json:"subnet,omitempty"`
	VpcName *string `json:"vpcName,omitempty"`
}
