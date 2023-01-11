package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OracleSourceConfig
 * Oracle data source configuration
**/
public class OracleSourceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowlist")
    public OracleRdbms allowlist;
    public OracleSourceConfig withAllowlist(OracleRdbms allowlist) {
        this.allowlist = allowlist;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dropLargeObjects")
    public java.util.Map<String, Object> dropLargeObjects;
    public OracleSourceConfig withDropLargeObjects(java.util.Map<String, Object> dropLargeObjects) {
        this.dropLargeObjects = dropLargeObjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rejectlist")
    public OracleRdbms rejectlist;
    public OracleSourceConfig withRejectlist(OracleRdbms rejectlist) {
        this.rejectlist = rejectlist;
        return this;
    }
}