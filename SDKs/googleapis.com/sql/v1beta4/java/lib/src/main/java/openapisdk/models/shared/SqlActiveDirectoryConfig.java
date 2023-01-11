package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SqlActiveDirectoryConfig
 * Active Directory configuration, relevant only for Cloud SQL for SQL Server.
**/
public class SqlActiveDirectoryConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public SqlActiveDirectoryConfig withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public SqlActiveDirectoryConfig withKind(String kind) {
        this.kind = kind;
        return this;
    }
}