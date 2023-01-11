package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SyncV1ServiceSyncListSyncListPermission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public SyncV1ServiceSyncListSyncListPermission withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public String identity;
    public SyncV1ServiceSyncListSyncListPermission withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("list_sid")
    public String listSid;
    public SyncV1ServiceSyncListSyncListPermission withListSid(String listSid) {
        this.listSid = listSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manage")
    public Boolean manage;
    public SyncV1ServiceSyncListSyncListPermission withManage(Boolean manage) {
        this.manage = manage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("read")
    public Boolean read;
    public SyncV1ServiceSyncListSyncListPermission withRead(Boolean read) {
        this.read = read;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_sid")
    public String serviceSid;
    public SyncV1ServiceSyncListSyncListPermission withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public SyncV1ServiceSyncListSyncListPermission withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("write")
    public Boolean write;
    public SyncV1ServiceSyncListSyncListPermission withWrite(Boolean write) {
        this.write = write;
        return this;
    }
}