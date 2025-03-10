/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ComputeTargetVpnGatewaysGetRequest {
    /**
     * V1 error format.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public org.openapis.openapi.models.shared.XgafvEnum dollarXgafv;

    public ComputeTargetVpnGatewaysGetRequest withDollarXgafv(org.openapis.openapi.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    
    /**
     * OAuth access token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;

    public ComputeTargetVpnGatewaysGetRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    
    /**
     * Data format for response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public org.openapis.openapi.models.shared.AltEnum alt;

    public ComputeTargetVpnGatewaysGetRequest withAlt(org.openapis.openapi.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    
    /**
     * JSONP
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;

    public ComputeTargetVpnGatewaysGetRequest withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    
    /**
     * Selector specifying which fields to include in a partial response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;

    public ComputeTargetVpnGatewaysGetRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;

    public ComputeTargetVpnGatewaysGetRequest withKey(String key) {
        this.key = key;
        return this;
    }
    
    /**
     * OAuth 2.0 token for the current user.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;

    public ComputeTargetVpnGatewaysGetRequest withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    
    /**
     * Returns response with indentations and line breaks.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;

    public ComputeTargetVpnGatewaysGetRequest withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    
    /**
     * Project ID for this request.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;

    public ComputeTargetVpnGatewaysGetRequest withProject(String project) {
        this.project = project;
        return this;
    }
    
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;

    public ComputeTargetVpnGatewaysGetRequest withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    
    /**
     * Name of the region for this request.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=region")
    public String region;

    public ComputeTargetVpnGatewaysGetRequest withRegion(String region) {
        this.region = region;
        return this;
    }
    
    /**
     * Name of the target VPN gateway to return.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetVpnGateway")
    public String targetVpnGateway;

    public ComputeTargetVpnGatewaysGetRequest withTargetVpnGateway(String targetVpnGateway) {
        this.targetVpnGateway = targetVpnGateway;
        return this;
    }
    
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;

    public ComputeTargetVpnGatewaysGetRequest withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;

    public ComputeTargetVpnGatewaysGetRequest withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    
    /**
     * Legacy name for parameter that has been superseded by `quotaUser`.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;

    public ComputeTargetVpnGatewaysGetRequest withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
    
    public ComputeTargetVpnGatewaysGetRequest(@JsonProperty("project") String project, @JsonProperty("region") String region, @JsonProperty("targetVpnGateway") String targetVpnGateway) {
        this.project = project;
        this.region = region;
        this.targetVpnGateway = targetVpnGateway;
  }
}
