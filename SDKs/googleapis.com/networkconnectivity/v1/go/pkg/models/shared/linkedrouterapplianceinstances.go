// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// LinkedRouterApplianceInstancesInput - A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke.
type LinkedRouterApplianceInstancesInput struct {
	// The list of router appliance instances.
	Instances []RouterApplianceInstance `json:"instances,omitempty"`
	// A value that controls whether site-to-site data transfer is enabled for these resources. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations).
	SiteToSiteDataTransfer *bool `json:"siteToSiteDataTransfer,omitempty"`
}

// LinkedRouterApplianceInstances - A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke.
type LinkedRouterApplianceInstances struct {
	// The list of router appliance instances.
	Instances []RouterApplianceInstance `json:"instances,omitempty"`
	// A value that controls whether site-to-site data transfer is enabled for these resources. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations).
	SiteToSiteDataTransfer *bool `json:"siteToSiteDataTransfer,omitempty"`
	// Output only. The VPC network where these router appliance instances are located.
	VpcNetwork *string `json:"vpcNetwork,omitempty"`
}
