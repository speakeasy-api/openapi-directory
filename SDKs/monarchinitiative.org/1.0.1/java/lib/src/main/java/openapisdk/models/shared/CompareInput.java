package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CompareInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_ids")
    public String[][] queryIds;
    public CompareInput withQueryIds(String[][] queryIds) {
        this.queryIds = queryIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reference_ids")
    public String[] referenceIds;
    public CompareInput withReferenceIds(String[] referenceIds) {
        this.referenceIds = referenceIds;
        return this;
    }
}