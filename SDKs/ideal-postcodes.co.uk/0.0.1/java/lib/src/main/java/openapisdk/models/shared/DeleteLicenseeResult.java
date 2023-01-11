package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteLicenseeResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Double deleted;
    public DeleteLicenseeResult withDeleted(Double deleted) {
        this.deleted = deleted;
        return this;
    }
}