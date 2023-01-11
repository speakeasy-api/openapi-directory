package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Export
 * An export. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
**/
public class Export {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudStorageSink")
    public CloudStorageSink cloudStorageSink;
    public Export withCloudStorageSink(CloudStorageSink cloudStorageSink) {
        this.cloudStorageSink = cloudStorageSink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Export withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportOptions")
    public ExportOptions exportOptions;
    public Export withExportOptions(ExportOptions exportOptions) {
        this.exportOptions = exportOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Export withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matterId")
    public String matterId;
    public Export withMatterId(String matterId) {
        this.matterId = matterId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Export withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public Query query;
    public Export withQuery(Query query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requester")
    public UserInfo requester;
    public Export withRequester(UserInfo requester) {
        this.requester = requester;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stats")
    public ExportStats stats;
    public Export withStats(ExportStats stats) {
        this.stats = stats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ExportStatusEnum status;
    public Export withStatus(ExportStatusEnum status) {
        this.status = status;
        return this;
    }
}