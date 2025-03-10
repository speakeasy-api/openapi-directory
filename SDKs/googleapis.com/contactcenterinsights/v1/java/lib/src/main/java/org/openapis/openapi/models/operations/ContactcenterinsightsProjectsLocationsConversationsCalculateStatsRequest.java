/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest {
    /**
     * V1 error format.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public org.openapis.openapi.models.shared.XgafvEnum dollarXgafv;

    public ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest withDollarXgafv(org.openapis.openapi.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    
    /**
     * OAuth access token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;

    public ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    
    /**
     * Data format for response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public org.openapis.openapi.models.shared.AltEnum alt;

    public ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest withAlt(org.openapis.openapi.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    
    /**
     * JSONP
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;

    public ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    
    /**
     * Selector specifying which fields to include in a partial response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;

    public ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    
    /**
     * A filter to reduce results to a specific subset. This field is useful for getting statistics about conversations with specific properties.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;

    public ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;

    public ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest withKey(String key) {
        this.key = key;
        return this;
    }
    
    /**
     * Required. The location of the conversations.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location")
    public String location;

    public ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest withLocation(String location) {
        this.location = location;
        return this;
    }
    
    /**
     * OAuth 2.0 token for the current user.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;

    public ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    
    /**
     * Returns response with indentations and line breaks.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;

    public ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;

    public ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;

    public ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;

    public ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    
    public ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest(@JsonProperty("location") String location) {
        this.location = location;
  }
}
