/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DriveFilesGenerateIdsRequest {
    /**
     * Data format for the response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public org.openapis.openapi.models.shared.AltEnum alt;

    public DriveFilesGenerateIdsRequest withAlt(org.openapis.openapi.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    
    /**
     * The number of IDs to return.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public Long count;

    public DriveFilesGenerateIdsRequest withCount(Long count) {
        this.count = count;
        return this;
    }
    
    /**
     * Selector specifying which fields to include in a partial response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;

    public DriveFilesGenerateIdsRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;

    public DriveFilesGenerateIdsRequest withKey(String key) {
        this.key = key;
        return this;
    }
    
    /**
     * OAuth 2.0 token for the current user.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;

    public DriveFilesGenerateIdsRequest withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    
    /**
     * Returns response with indentations and line breaks.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;

    public DriveFilesGenerateIdsRequest withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;

    public DriveFilesGenerateIdsRequest withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    
    /**
     * The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'. (Default: 'drive')
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=space")
    public String space;

    public DriveFilesGenerateIdsRequest withSpace(String space) {
        this.space = space;
        return this;
    }
    
    /**
     * The type of items which the IDs can be used for. Supported values are 'files' and 'shortcuts'. Note that 'shortcuts' are only supported in the drive 'space'. (Default: 'files')
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;

    public DriveFilesGenerateIdsRequest withType(String type) {
        this.type = type;
        return this;
    }
    
    /**
     * Deprecated. Please use quotaUser instead.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;

    public DriveFilesGenerateIdsRequest withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
    
    public DriveFilesGenerateIdsRequest(){}
}
