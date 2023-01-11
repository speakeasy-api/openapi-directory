package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreviewSyncServiceSyncListSyncListPermission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public PreviewSyncServiceSyncListSyncListPermission withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public String identity;
    public PreviewSyncServiceSyncListSyncListPermission withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("list_sid")
    public String listSid;
    public PreviewSyncServiceSyncListSyncListPermission withListSid(String listSid) {
        this.listSid = listSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manage")
    public Boolean manage;
    public PreviewSyncServiceSyncListSyncListPermission withManage(Boolean manage) {
        this.manage = manage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("read")
    public Boolean read;
    public PreviewSyncServiceSyncListSyncListPermission withRead(Boolean read) {
        this.read = read;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_sid")
    public String serviceSid;
    public PreviewSyncServiceSyncListSyncListPermission withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PreviewSyncServiceSyncListSyncListPermission withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("write")
    public Boolean write;
    public PreviewSyncServiceSyncListSyncListPermission withWrite(Boolean write) {
        this.write = write;
        return this;
    }
}