package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Deleted {
    @JsonProperty("deleted")
    public Boolean deleted;
    public Deleted withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
}