/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DriveRevisionsDeleteRequest {
    /**
     * Data format for the response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public org.openapis.openapi.models.shared.AltEnum alt;

    public DriveRevisionsDeleteRequest withAlt(org.openapis.openapi.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    
    /**
     * Selector specifying which fields to include in a partial response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;

    public DriveRevisionsDeleteRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    
    /**
     * The ID of the file.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;

    public DriveRevisionsDeleteRequest withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;

    public DriveRevisionsDeleteRequest withKey(String key) {
        this.key = key;
        return this;
    }
    
    /**
     * OAuth 2.0 token for the current user.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;

    public DriveRevisionsDeleteRequest withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    
    /**
     * Returns response with indentations and line breaks.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;

    public DriveRevisionsDeleteRequest withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;

    public DriveRevisionsDeleteRequest withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    
    /**
     * The ID of the revision.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=revisionId")
    public String revisionId;

    public DriveRevisionsDeleteRequest withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
    
    /**
     * Deprecated. Please use quotaUser instead.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;

    public DriveRevisionsDeleteRequest withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
    
    public DriveRevisionsDeleteRequest(@JsonProperty("fileId") String fileId, @JsonProperty("revisionId") String revisionId) {
        this.fileId = fileId;
        this.revisionId = revisionId;
  }
}
