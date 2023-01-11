package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreviewSyncServiceSyncMapSyncMapPermission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public PreviewSyncServiceSyncMapSyncMapPermission withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public String identity;
    public PreviewSyncServiceSyncMapSyncMapPermission withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manage")
    public Boolean manage;
    public PreviewSyncServiceSyncMapSyncMapPermission withManage(Boolean manage) {
        this.manage = manage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("map_sid")
    public String mapSid;
    public PreviewSyncServiceSyncMapSyncMapPermission withMapSid(String mapSid) {
        this.mapSid = mapSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("read")
    public Boolean read;
    public PreviewSyncServiceSyncMapSyncMapPermission withRead(Boolean read) {
        this.read = read;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_sid")
    public String serviceSid;
    public PreviewSyncServiceSyncMapSyncMapPermission withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PreviewSyncServiceSyncMapSyncMapPermission withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("write")
    public Boolean write;
    public PreviewSyncServiceSyncMapSyncMapPermission withWrite(Boolean write) {
        this.write = write;
        return this;
    }
}