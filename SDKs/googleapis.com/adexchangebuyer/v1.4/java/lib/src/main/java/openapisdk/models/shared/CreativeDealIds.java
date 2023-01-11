package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeDealIds
 * The external deal ids associated with a creative.
**/
public class CreativeDealIds {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealStatuses")
    public CreativeDealIdsDealStatuses[] dealStatuses;
    public CreativeDealIds withDealStatuses(CreativeDealIdsDealStatuses[] dealStatuses) {
        this.dealStatuses = dealStatuses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CreativeDealIds withKind(String kind) {
        this.kind = kind;
        return this;
    }
}