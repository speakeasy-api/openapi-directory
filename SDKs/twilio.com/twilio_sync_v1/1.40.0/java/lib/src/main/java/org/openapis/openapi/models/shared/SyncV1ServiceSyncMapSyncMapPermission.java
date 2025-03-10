/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SyncV1ServiceSyncMapSyncMapPermission - OK
 */
public class SyncV1ServiceSyncMapSyncMapPermission {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sync Map Permission resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public SyncV1ServiceSyncMapSyncMapPermission withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    
    /**
     * The application-defined string that uniquely identifies the resource's User within the Service to an FPA token.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public String identity;
    public SyncV1ServiceSyncMapSyncMapPermission withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    
    /**
     * Whether the identity can delete the Sync Map.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manage")
    public Boolean manage;
    public SyncV1ServiceSyncMapSyncMapPermission withManage(Boolean manage) {
        this.manage = manage;
        return this;
    }
    
    /**
     * The SID of the Sync Map to which the Permission applies.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("map_sid")
    public String mapSid;
    public SyncV1ServiceSyncMapSyncMapPermission withMapSid(String mapSid) {
        this.mapSid = mapSid;
        return this;
    }
    
    /**
     * Whether the identity can read the Sync Map and its Items.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("read")
    public Boolean read;
    public SyncV1ServiceSyncMapSyncMapPermission withRead(Boolean read) {
        this.read = read;
        return this;
    }
    
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_sid")
    public String serviceSid;
    public SyncV1ServiceSyncMapSyncMapPermission withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    
    /**
     * The absolute URL of the Sync Map Permission resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public SyncV1ServiceSyncMapSyncMapPermission withUrl(String url) {
        this.url = url;
        return this;
    }
    
    /**
     * Whether the identity can create, update, and delete Items in the Sync Map.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("write")
    public Boolean write;
    public SyncV1ServiceSyncMapSyncMapPermission withWrite(Boolean write) {
        this.write = write;
        return this;
    }
    
}
