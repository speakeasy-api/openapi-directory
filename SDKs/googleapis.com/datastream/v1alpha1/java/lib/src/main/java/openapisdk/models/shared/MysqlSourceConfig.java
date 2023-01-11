package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MysqlSourceConfig
 * MySQL source configuration
**/
public class MysqlSourceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowlist")
    public MysqlRdbms allowlist;
    public MysqlSourceConfig withAllowlist(MysqlRdbms allowlist) {
        this.allowlist = allowlist;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rejectlist")
    public MysqlRdbms rejectlist;
    public MysqlSourceConfig withRejectlist(MysqlRdbms rejectlist) {
        this.rejectlist = rejectlist;
        return this;
    }
}