/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IdentityServiceAzureADConfigInput - Configuration for the AzureAD Auth flow.
 */
public class IdentityServiceAzureADConfigInput {
    /**
     * ID for the registered client application that makes authentication requests to the Azure AD identity provider.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;

    public IdentityServiceAzureADConfigInput withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    
    /**
     * Input only. Unencrypted AzureAD client secret will be passed to the GKE Hub CLH.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientSecret")
    public String clientSecret;

    public IdentityServiceAzureADConfigInput withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    
    /**
     * The redirect URL that kubectl uses for authorization.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubectlRedirectUri")
    public String kubectlRedirectUri;

    public IdentityServiceAzureADConfigInput withKubectlRedirectUri(String kubectlRedirectUri) {
        this.kubectlRedirectUri = kubectlRedirectUri;
        return this;
    }
    
    /**
     * Kind of Azure AD account to be authenticated. Supported values are or for accounts belonging to a specific tenant.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenant")
    public String tenant;

    public IdentityServiceAzureADConfigInput withTenant(String tenant) {
        this.tenant = tenant;
        return this;
    }
    
    public IdentityServiceAzureADConfigInput(){}
}
