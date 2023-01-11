package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddressAutocompleteResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hits")
    public AddressAutocompleteHit[] hits;
    public AddressAutocompleteResult withHits(AddressAutocompleteHit[] hits) {
        this.hits = hits;
        return this;
    }
}