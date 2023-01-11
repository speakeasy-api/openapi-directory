package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Domain
 * Information about a domain.
**/
public class Domain {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacyId")
    public String legacyId;
    public Domain withLegacyId(String legacyId) {
        this.legacyId = legacyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Domain withName(String name) {
        this.name = name;
        return this;
    }
}