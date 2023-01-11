package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CollectionResponseExternalUnifiedEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paging")
    public Paging paging;
    public CollectionResponseExternalUnifiedEvent withPaging(Paging paging) {
        this.paging = paging;
        return this;
    }
    @JsonProperty("results")
    public ExternalUnifiedEvent[] results;
    public CollectionResponseExternalUnifiedEvent withResults(ExternalUnifiedEvent[] results) {
        this.results = results;
        return this;
    }
}