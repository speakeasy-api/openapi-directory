/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest {
    /**
     * V1 error format.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public org.openapis.openapi.models.shared.XgafvEnum dollarXgafv;

    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest withDollarXgafv(org.openapis.openapi.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.ApiSpecInput apiSpecInput;

    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest withApiSpecInput(org.openapis.openapi.models.shared.ApiSpecInput apiSpecInput) {
        this.apiSpecInput = apiSpecInput;
        return this;
    }
    
    /**
     * OAuth access token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;

    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    
    /**
     * If set to true, and the spec is not found, a new spec will be created. In this situation, `update_mask` is ignored.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allowMissing")
    public Boolean allowMissing;

    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest withAllowMissing(Boolean allowMissing) {
        this.allowMissing = allowMissing;
        return this;
    }
    
    /**
     * Data format for response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public org.openapis.openapi.models.shared.AltEnum alt;

    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest withAlt(org.openapis.openapi.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    
    /**
     * JSONP
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;

    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    
    /**
     * Selector specifying which fields to include in a partial response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;

    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;

    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest withKey(String key) {
        this.key = key;
        return this;
    }
    
    /**
     * Resource name.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;

    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * OAuth 2.0 token for the current user.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;

    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    
    /**
     * Returns response with indentations and line breaks.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;

    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;

    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    
    /**
     * The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If an asterisk "*" is specified, all fields are updated, including fields that are unspecified/default in the request.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updateMask")
    public String updateMask;

    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
    
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;

    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;

    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    
    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest(@JsonProperty("name") String name) {
        this.name = name;
  }
}
