/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class WebsecurityscannerProjectsScanConfigsPatchRequest {
    /**
     * V1 error format.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public org.openapis.openapi.models.shared.XgafvEnum dollarXgafv;

    public WebsecurityscannerProjectsScanConfigsPatchRequest withDollarXgafv(org.openapis.openapi.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.ScanConfig scanConfig;

    public WebsecurityscannerProjectsScanConfigsPatchRequest withScanConfig(org.openapis.openapi.models.shared.ScanConfig scanConfig) {
        this.scanConfig = scanConfig;
        return this;
    }
    
    /**
     * OAuth access token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;

    public WebsecurityscannerProjectsScanConfigsPatchRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    
    /**
     * Data format for response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public org.openapis.openapi.models.shared.AltEnum alt;

    public WebsecurityscannerProjectsScanConfigsPatchRequest withAlt(org.openapis.openapi.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    
    /**
     * JSONP
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;

    public WebsecurityscannerProjectsScanConfigsPatchRequest withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    
    /**
     * Selector specifying which fields to include in a partial response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;

    public WebsecurityscannerProjectsScanConfigsPatchRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;

    public WebsecurityscannerProjectsScanConfigsPatchRequest withKey(String key) {
        this.key = key;
        return this;
    }
    
    /**
     * The resource name of the ScanConfig. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are generated by the system.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;

    public WebsecurityscannerProjectsScanConfigsPatchRequest withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * OAuth 2.0 token for the current user.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;

    public WebsecurityscannerProjectsScanConfigsPatchRequest withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    
    /**
     * Returns response with indentations and line breaks.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;

    public WebsecurityscannerProjectsScanConfigsPatchRequest withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;

    public WebsecurityscannerProjectsScanConfigsPatchRequest withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    
    /**
     * Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updateMask")
    public String updateMask;

    public WebsecurityscannerProjectsScanConfigsPatchRequest withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
    
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;

    public WebsecurityscannerProjectsScanConfigsPatchRequest withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;

    public WebsecurityscannerProjectsScanConfigsPatchRequest withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    
    public WebsecurityscannerProjectsScanConfigsPatchRequest(@JsonProperty("name") String name) {
        this.name = name;
  }
}
