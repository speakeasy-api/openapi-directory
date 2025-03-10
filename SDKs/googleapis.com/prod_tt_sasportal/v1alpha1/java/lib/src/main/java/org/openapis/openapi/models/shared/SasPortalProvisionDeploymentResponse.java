/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SasPortalProvisionDeploymentResponse - Response for [ProvisionDeployment]. [spectrum.sas.portal.v1alpha1.Provisioning.ProvisionDeployment].
 */
public class SasPortalProvisionDeploymentResponse {
    /**
     * Optional. Optional error message if the provisioning request is not successful.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;

    public SasPortalProvisionDeploymentResponse withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    
    public SasPortalProvisionDeploymentResponse(){}
}
