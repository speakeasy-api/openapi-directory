package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LicenseeDaily {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Double count;
    public LicenseeDaily withCount(Double count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Double limit;
    public LicenseeDaily withLimit(Double limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedAt")
    public String updatedAt;
    public LicenseeDaily withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}