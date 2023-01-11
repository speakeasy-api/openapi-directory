package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchResponse
 * Response message includes the context and a list of matching results which contain the detail of associated entities.
**/
public class SearchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@context")
    public Object atContext;
    public SearchResponse withAtContext(Object atContext) {
        this.atContext = atContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@type")
    public Object atType;
    public SearchResponse withAtType(Object atType) {
        this.atType = atType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemListElement")
    public Object[] itemListElement;
    public SearchResponse withItemListElement(Object[] itemListElement) {
        this.itemListElement = itemListElement;
        return this;
    }
}