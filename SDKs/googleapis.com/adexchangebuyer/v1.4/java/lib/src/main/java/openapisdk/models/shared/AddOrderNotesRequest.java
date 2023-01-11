package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddOrderNotesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public MarketplaceNote[] notes;
    public AddOrderNotesRequest withNotes(MarketplaceNote[] notes) {
        this.notes = notes;
        return this;
    }
}