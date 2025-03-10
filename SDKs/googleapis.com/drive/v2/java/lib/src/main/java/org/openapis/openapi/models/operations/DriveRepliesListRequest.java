/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DriveRepliesListRequest {
    /**
     * Data format for the response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public org.openapis.openapi.models.shared.AltEnum alt;

    public DriveRepliesListRequest withAlt(org.openapis.openapi.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    
    /**
     * The ID of the comment.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commentId")
    public String commentId;

    public DriveRepliesListRequest withCommentId(String commentId) {
        this.commentId = commentId;
        return this;
    }
    
    /**
     * Selector specifying which fields to include in a partial response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;

    public DriveRepliesListRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    
    /**
     * The ID of the file.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;

    public DriveRepliesListRequest withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    
    /**
     * If set, all replies, including deleted replies (with content stripped) will be returned.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeDeleted")
    public Boolean includeDeleted;

    public DriveRepliesListRequest withIncludeDeleted(Boolean includeDeleted) {
        this.includeDeleted = includeDeleted;
        return this;
    }
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;

    public DriveRepliesListRequest withKey(String key) {
        this.key = key;
        return this;
    }
    
    /**
     * The maximum number of replies to include in the response, used for paging.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;

    public DriveRepliesListRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    
    /**
     * OAuth 2.0 token for the current user.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;

    public DriveRepliesListRequest withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    
    /**
     * The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;

    public DriveRepliesListRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    
    /**
     * Returns response with indentations and line breaks.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;

    public DriveRepliesListRequest withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;

    public DriveRepliesListRequest withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    
    /**
     * Deprecated. Please use quotaUser instead.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;

    public DriveRepliesListRequest withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
    
    public DriveRepliesListRequest(@JsonProperty("commentId") String commentId, @JsonProperty("fileId") String fileId) {
        this.commentId = commentId;
        this.fileId = fileId;
  }
}
