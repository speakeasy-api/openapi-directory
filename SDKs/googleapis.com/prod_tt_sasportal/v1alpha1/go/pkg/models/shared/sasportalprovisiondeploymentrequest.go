// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// SasPortalProvisionDeploymentRequest - Request for [ProvisionDeployment]. [spectrum.sas.portal.v1alpha1.Provisioning.ProvisionDeployment]. GCP Project, Organization Info, and caller’s GAIA ID should be retrieved from the RPC handler, and used as inputs to create a new SAS organization (if not exists) and a new SAS deployment.
type SasPortalProvisionDeploymentRequest struct {
	// Optional. If this field is set, and a new SAS Portal Deployment needs to be created, its display name will be set to the value of this field.
	NewDeploymentDisplayName *string `json:"newDeploymentDisplayName,omitempty"`
	// Optional. If this field is set, and a new SAS Portal Organization needs to be created, its display name will be set to the value of this field.
	NewOrganizationDisplayName *string `json:"newOrganizationDisplayName,omitempty"`
}
