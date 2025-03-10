/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest {
    /**
     * V1 error format.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public org.openapis.openapi.models.shared.XgafvEnum dollarXgafv;

    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest withDollarXgafv(org.openapis.openapi.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.CutoverJobInput cutoverJobInput;

    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest withCutoverJobInput(org.openapis.openapi.models.shared.CutoverJobInput cutoverJobInput) {
        this.cutoverJobInput = cutoverJobInput;
        return this;
    }
    
    /**
     * OAuth access token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;

    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    
    /**
     * Data format for response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public org.openapis.openapi.models.shared.AltEnum alt;

    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest withAlt(org.openapis.openapi.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    
    /**
     * JSONP
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;

    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    
    /**
     * Required. The cutover job identifier.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cutoverJobId")
    public String cutoverJobId;

    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest withCutoverJobId(String cutoverJobId) {
        this.cutoverJobId = cutoverJobId;
        return this;
    }
    
    /**
     * Selector specifying which fields to include in a partial response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;

    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;

    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest withKey(String key) {
        this.key = key;
        return this;
    }
    
    /**
     * OAuth 2.0 token for the current user.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;

    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    
    /**
     * Required. The Cutover's parent.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;

    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest withParent(String parent) {
        this.parent = parent;
        return this;
    }
    
    /**
     * Returns response with indentations and line breaks.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;

    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;

    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    
    /**
     * A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=requestId")
    public String requestId;

    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;

    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;

    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    
    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest(@JsonProperty("parent") String parent) {
        this.parent = parent;
  }
}
