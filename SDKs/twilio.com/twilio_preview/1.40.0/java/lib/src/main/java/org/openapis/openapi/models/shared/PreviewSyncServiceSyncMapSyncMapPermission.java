/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PreviewSyncServiceSyncMapSyncMapPermission - OK
 */
public class PreviewSyncServiceSyncMapSyncMapPermission {
    /**
     * The unique SID identifier of the Twilio Account.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public PreviewSyncServiceSyncMapSyncMapPermission withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    
    /**
     * Arbitrary string identifier representing a human user associated with an FPA token, assigned by the developer.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public String identity;
    public PreviewSyncServiceSyncMapSyncMapPermission withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    
    /**
     * Boolean flag specifying whether the identity can delete the Sync Map.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manage")
    public Boolean manage;
    public PreviewSyncServiceSyncMapSyncMapPermission withManage(Boolean manage) {
        this.manage = manage;
        return this;
    }
    
    /**
     * The unique SID identifier of the Sync Map to which the Permission applies.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("map_sid")
    public String mapSid;
    public PreviewSyncServiceSyncMapSyncMapPermission withMapSid(String mapSid) {
        this.mapSid = mapSid;
        return this;
    }
    
    /**
     * Boolean flag specifying whether the identity can read the Sync Map and its Items.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("read")
    public Boolean read;
    public PreviewSyncServiceSyncMapSyncMapPermission withRead(Boolean read) {
        this.read = read;
        return this;
    }
    
    /**
     * The unique SID identifier of the Sync Service Instance.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_sid")
    public String serviceSid;
    public PreviewSyncServiceSyncMapSyncMapPermission withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    
    /**
     * Contains an absolute URL for this Sync Map Permission.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PreviewSyncServiceSyncMapSyncMapPermission withUrl(String url) {
        this.url = url;
        return this;
    }
    
    /**
     * Boolean flag specifying whether the identity can create, update and delete Items of the Sync Map.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("write")
    public Boolean write;
    public PreviewSyncServiceSyncMapSyncMapPermission withWrite(Boolean write) {
        this.write = write;
        return this;
    }
    
}
