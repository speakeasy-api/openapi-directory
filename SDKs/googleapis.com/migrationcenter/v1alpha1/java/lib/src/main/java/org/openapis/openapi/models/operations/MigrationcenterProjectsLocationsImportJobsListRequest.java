/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class MigrationcenterProjectsLocationsImportJobsListRequest {
    /**
     * V1 error format.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public org.openapis.openapi.models.shared.XgafvEnum dollarXgafv;

    public MigrationcenterProjectsLocationsImportJobsListRequest withDollarXgafv(org.openapis.openapi.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    
    /**
     * OAuth access token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;

    public MigrationcenterProjectsLocationsImportJobsListRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    
    /**
     * Data format for response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public org.openapis.openapi.models.shared.AltEnum alt;

    public MigrationcenterProjectsLocationsImportJobsListRequest withAlt(org.openapis.openapi.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    
    /**
     * JSONP
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;

    public MigrationcenterProjectsLocationsImportJobsListRequest withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    
    /**
     * Selector specifying which fields to include in a partial response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;

    public MigrationcenterProjectsLocationsImportJobsListRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    
    /**
     * Filtering results.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;

    public MigrationcenterProjectsLocationsImportJobsListRequest withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;

    public MigrationcenterProjectsLocationsImportJobsListRequest withKey(String key) {
        this.key = key;
        return this;
    }
    
    /**
     * OAuth 2.0 token for the current user.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;

    public MigrationcenterProjectsLocationsImportJobsListRequest withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    
    /**
     * Field to sort by. See https://google.aip.dev/132#ordering for more details.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderBy")
    public String orderBy;

    public MigrationcenterProjectsLocationsImportJobsListRequest withOrderBy(String orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;

    public MigrationcenterProjectsLocationsImportJobsListRequest withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    
    /**
     * A token identifying a page of results the server should return.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;

    public MigrationcenterProjectsLocationsImportJobsListRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    
    /**
     * Required. Parent value for `ListImportJobsRequest`.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;

    public MigrationcenterProjectsLocationsImportJobsListRequest withParent(String parent) {
        this.parent = parent;
        return this;
    }
    
    /**
     * Returns response with indentations and line breaks.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;

    public MigrationcenterProjectsLocationsImportJobsListRequest withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;

    public MigrationcenterProjectsLocationsImportJobsListRequest withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;

    public MigrationcenterProjectsLocationsImportJobsListRequest withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;

    public MigrationcenterProjectsLocationsImportJobsListRequest withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    
    /**
     * Optional. The level of details of each import job. Default value is BASIC.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=view")
    public MigrationcenterProjectsLocationsImportJobsListViewEnum view;

    public MigrationcenterProjectsLocationsImportJobsListRequest withView(MigrationcenterProjectsLocationsImportJobsListViewEnum view) {
        this.view = view;
        return this;
    }
    
    public MigrationcenterProjectsLocationsImportJobsListRequest(@JsonProperty("parent") String parent) {
        this.parent = parent;
  }
}
