package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SqlAclEntry
 * An entry for an Access Control list.
**/
public class SqlAclEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public SqlAclEntry withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public SqlAclEntry withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public String ttl;
    public SqlAclEntry withTtl(String ttl) {
        this.ttl = ttl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public SqlAclEntry withValue(String value) {
        this.value = value;
        return this;
    }
}