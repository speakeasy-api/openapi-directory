package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreviewSyncServiceDocumentDocumentPermission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public PreviewSyncServiceDocumentDocumentPermission withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document_sid")
    public String documentSid;
    public PreviewSyncServiceDocumentDocumentPermission withDocumentSid(String documentSid) {
        this.documentSid = documentSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public String identity;
    public PreviewSyncServiceDocumentDocumentPermission withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manage")
    public Boolean manage;
    public PreviewSyncServiceDocumentDocumentPermission withManage(Boolean manage) {
        this.manage = manage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("read")
    public Boolean read;
    public PreviewSyncServiceDocumentDocumentPermission withRead(Boolean read) {
        this.read = read;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_sid")
    public String serviceSid;
    public PreviewSyncServiceDocumentDocumentPermission withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PreviewSyncServiceDocumentDocumentPermission withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("write")
    public Boolean write;
    public PreviewSyncServiceDocumentDocumentPermission withWrite(Boolean write) {
        this.write = write;
        return this;
    }
}