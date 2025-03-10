/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetTagFromPermissionRequest {
    /**
     * The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;

    public GetTagFromPermissionRequest withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    
    /**
     * The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;

    public GetTagFromPermissionRequest withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    
    /**
     * The permission unique identifier. E.g PERM001
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PermissionId")
    public String permissionId;

    public GetTagFromPermissionRequest withPermissionId(String permissionId) {
        this.permissionId = permissionId;
        return this;
    }
    
    /**
     * The tag unique identifier. E.g. MyTag
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;

    public GetTagFromPermissionRequest withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
    
    public GetTagFromPermissionRequest(@JsonProperty("Api-Version") String apiVersion, @JsonProperty("Authorization") String authorization, @JsonProperty("PermissionId") String permissionId, @JsonProperty("TagId") String tagId) {
        this.apiVersion = apiVersion;
        this.authorization = authorization;
        this.permissionId = permissionId;
        this.tagId = tagId;
  }
}
