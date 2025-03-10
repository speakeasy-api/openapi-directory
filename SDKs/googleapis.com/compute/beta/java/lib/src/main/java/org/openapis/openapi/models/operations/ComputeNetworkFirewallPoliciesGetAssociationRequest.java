/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ComputeNetworkFirewallPoliciesGetAssociationRequest {
    /**
     * V1 error format.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public org.openapis.openapi.models.shared.XgafvEnum dollarXgafv;

    public ComputeNetworkFirewallPoliciesGetAssociationRequest withDollarXgafv(org.openapis.openapi.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    
    /**
     * OAuth access token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;

    public ComputeNetworkFirewallPoliciesGetAssociationRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    
    /**
     * Data format for response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public org.openapis.openapi.models.shared.AltEnum alt;

    public ComputeNetworkFirewallPoliciesGetAssociationRequest withAlt(org.openapis.openapi.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    
    /**
     * JSONP
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;

    public ComputeNetworkFirewallPoliciesGetAssociationRequest withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    
    /**
     * Selector specifying which fields to include in a partial response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;

    public ComputeNetworkFirewallPoliciesGetAssociationRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    
    /**
     * Name of the firewall policy to which the queried association belongs.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firewallPolicy")
    public String firewallPolicy;

    public ComputeNetworkFirewallPoliciesGetAssociationRequest withFirewallPolicy(String firewallPolicy) {
        this.firewallPolicy = firewallPolicy;
        return this;
    }
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;

    public ComputeNetworkFirewallPoliciesGetAssociationRequest withKey(String key) {
        this.key = key;
        return this;
    }
    
    /**
     * The name of the association to get from the firewall policy.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;

    public ComputeNetworkFirewallPoliciesGetAssociationRequest withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * OAuth 2.0 token for the current user.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;

    public ComputeNetworkFirewallPoliciesGetAssociationRequest withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    
    /**
     * Returns response with indentations and line breaks.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;

    public ComputeNetworkFirewallPoliciesGetAssociationRequest withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    
    /**
     * Project ID for this request.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;

    public ComputeNetworkFirewallPoliciesGetAssociationRequest withProject(String project) {
        this.project = project;
        return this;
    }
    
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;

    public ComputeNetworkFirewallPoliciesGetAssociationRequest withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;

    public ComputeNetworkFirewallPoliciesGetAssociationRequest withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;

    public ComputeNetworkFirewallPoliciesGetAssociationRequest withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    
    /**
     * Legacy name for parameter that has been superseded by `quotaUser`.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;

    public ComputeNetworkFirewallPoliciesGetAssociationRequest withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
    
    public ComputeNetworkFirewallPoliciesGetAssociationRequest(@JsonProperty("firewallPolicy") String firewallPolicy, @JsonProperty("project") String project) {
        this.firewallPolicy = firewallPolicy;
        this.project = project;
  }
}
