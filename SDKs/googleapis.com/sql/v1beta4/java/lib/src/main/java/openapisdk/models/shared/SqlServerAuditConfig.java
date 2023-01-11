package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SqlServerAuditConfig
 * SQL Server specific audit configuration.
**/
public class SqlServerAuditConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucket")
    public String bucket;
    public SqlServerAuditConfig withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public SqlServerAuditConfig withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retentionInterval")
    public String retentionInterval;
    public SqlServerAuditConfig withRetentionInterval(String retentionInterval) {
        this.retentionInterval = retentionInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploadInterval")
    public String uploadInterval;
    public SqlServerAuditConfig withUploadInterval(String uploadInterval) {
        this.uploadInterval = uploadInterval;
        return this;
    }
}