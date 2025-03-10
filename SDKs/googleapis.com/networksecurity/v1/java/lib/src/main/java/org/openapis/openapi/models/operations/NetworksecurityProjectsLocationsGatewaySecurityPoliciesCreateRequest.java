/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest {
    /**
     * V1 error format.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public org.openapis.openapi.models.shared.XgafvEnum dollarXgafv;

    public NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest withDollarXgafv(org.openapis.openapi.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.GatewaySecurityPolicyInput gatewaySecurityPolicyInput;

    public NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest withGatewaySecurityPolicyInput(org.openapis.openapi.models.shared.GatewaySecurityPolicyInput gatewaySecurityPolicyInput) {
        this.gatewaySecurityPolicyInput = gatewaySecurityPolicyInput;
        return this;
    }
    
    /**
     * OAuth access token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;

    public NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    
    /**
     * Data format for response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public org.openapis.openapi.models.shared.AltEnum alt;

    public NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest withAlt(org.openapis.openapi.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    
    /**
     * JSONP
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;

    public NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    
    /**
     * Selector specifying which fields to include in a partial response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;

    public NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    
    /**
     * Required. Short name of the GatewaySecurityPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "gateway_security_policy1".
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gatewaySecurityPolicyId")
    public String gatewaySecurityPolicyId;

    public NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest withGatewaySecurityPolicyId(String gatewaySecurityPolicyId) {
        this.gatewaySecurityPolicyId = gatewaySecurityPolicyId;
        return this;
    }
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;

    public NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest withKey(String key) {
        this.key = key;
        return this;
    }
    
    /**
     * OAuth 2.0 token for the current user.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;

    public NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    
    /**
     * Required. The parent resource of the GatewaySecurityPolicy. Must be in the format `projects/{project}/locations/{location}`.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;

    public NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest withParent(String parent) {
        this.parent = parent;
        return this;
    }
    
    /**
     * Returns response with indentations and line breaks.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;

    public NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;

    public NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;

    public NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;

    public NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    
    public NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest(@JsonProperty("parent") String parent) {
        this.parent = parent;
  }
}
