/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class FetchSyncSyncMapPermissionRequest {
    /**
     * Arbitrary string identifier representing a user associated with an FPA token, assigned by the developer.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Identity")
    public String identity;

    public FetchSyncSyncMapPermissionRequest withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    
    /**
     * Identifier of the Sync Map. Either a SID or a unique name.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MapSid")
    public String mapSid;

    public FetchSyncSyncMapPermissionRequest withMapSid(String mapSid) {
        this.mapSid = mapSid;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;

    public FetchSyncSyncMapPermissionRequest withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    
    public FetchSyncSyncMapPermissionRequest(@JsonProperty("Identity") String identity, @JsonProperty("MapSid") String mapSid, @JsonProperty("ServiceSid") String serviceSid) {
        this.identity = identity;
        this.mapSid = mapSid;
        this.serviceSid = serviceSid;
  }
}
