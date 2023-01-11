package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Identity
 * The unique identifier of the update.
**/
public class Identity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public Integer revision;
    public Identity withRevision(Integer revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateId")
    public String updateId;
    public Identity withUpdateId(String updateId) {
        this.updateId = updateId;
        return this;
    }
}