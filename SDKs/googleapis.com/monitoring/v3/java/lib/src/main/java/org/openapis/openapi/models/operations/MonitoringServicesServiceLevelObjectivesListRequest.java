/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class MonitoringServicesServiceLevelObjectivesListRequest {
    /**
     * V1 error format.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public org.openapis.openapi.models.shared.XgafvEnum dollarXgafv;

    public MonitoringServicesServiceLevelObjectivesListRequest withDollarXgafv(org.openapis.openapi.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    
    /**
     * OAuth access token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;

    public MonitoringServicesServiceLevelObjectivesListRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    
    /**
     * Data format for response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public org.openapis.openapi.models.shared.AltEnum alt;

    public MonitoringServicesServiceLevelObjectivesListRequest withAlt(org.openapis.openapi.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    
    /**
     * JSONP
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;

    public MonitoringServicesServiceLevelObjectivesListRequest withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    
    /**
     * Selector specifying which fields to include in a partial response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;

    public MonitoringServicesServiceLevelObjectivesListRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    
    /**
     * A filter specifying what ServiceLevelObjectives to return.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;

    public MonitoringServicesServiceLevelObjectivesListRequest withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;

    public MonitoringServicesServiceLevelObjectivesListRequest withKey(String key) {
        this.key = key;
        return this;
    }
    
    /**
     * OAuth 2.0 token for the current user.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;

    public MonitoringServicesServiceLevelObjectivesListRequest withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    
    /**
     * A non-negative number that is the maximum number of results to return. When 0, use default page size.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;

    public MonitoringServicesServiceLevelObjectivesListRequest withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    
    /**
     * If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;

    public MonitoringServicesServiceLevelObjectivesListRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    
    /**
     * Required. Resource name of the parent containing the listed SLOs, either a project or a Monitoring Metrics Scope. The formats are: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID] workspaces/[HOST_PROJECT_ID_OR_NUMBER]/services/- 
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;

    public MonitoringServicesServiceLevelObjectivesListRequest withParent(String parent) {
        this.parent = parent;
        return this;
    }
    
    /**
     * Returns response with indentations and line breaks.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;

    public MonitoringServicesServiceLevelObjectivesListRequest withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;

    public MonitoringServicesServiceLevelObjectivesListRequest withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;

    public MonitoringServicesServiceLevelObjectivesListRequest withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;

    public MonitoringServicesServiceLevelObjectivesListRequest withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    
    /**
     * View of the ServiceLevelObjectives to return. If DEFAULT, return each ServiceLevelObjective as originally defined. If EXPLICIT and the ServiceLevelObjective is defined in terms of a BasicSli, replace the BasicSli with a RequestBasedSli spelling out how the SLI is computed.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=view")
    public MonitoringServicesServiceLevelObjectivesListViewEnum view;

    public MonitoringServicesServiceLevelObjectivesListRequest withView(MonitoringServicesServiceLevelObjectivesListViewEnum view) {
        this.view = view;
        return this;
    }
    
    public MonitoringServicesServiceLevelObjectivesListRequest(@JsonProperty("parent") String parent) {
        this.parent = parent;
  }
}
