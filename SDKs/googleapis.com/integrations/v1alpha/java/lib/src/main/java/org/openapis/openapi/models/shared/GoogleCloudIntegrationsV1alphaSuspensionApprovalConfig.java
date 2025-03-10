/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig - Configurations for approving the Suspension.
 */
public class GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig {
    /**
     * Information to provide for recipients.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customMessage")
    public String customMessage;

    public GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig withCustomMessage(String customMessage) {
        this.customMessage = customMessage;
        return this;
    }
    
    /**
     * Email addresses to send approval request to.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailAddresses")
    public String[] emailAddresses;

    public GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig withEmailAddresses(String[] emailAddresses) {
        this.emailAddresses = emailAddresses;
        return this;
    }
    
    /**
     * Expiration configs for the approval request.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiration")
    public GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration expiration;

    public GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig withExpiration(GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration expiration) {
        this.expiration = expiration;
        return this;
    }
    
    public GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig(){}
}
