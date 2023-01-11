package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchSpelling
 * Spell correction information for a query.
**/
public class SearchSpelling {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("correctedQuery")
    public String correctedQuery;
    public SearchSpelling withCorrectedQuery(String correctedQuery) {
        this.correctedQuery = correctedQuery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("htmlCorrectedQuery")
    public String htmlCorrectedQuery;
    public SearchSpelling withHtmlCorrectedQuery(String htmlCorrectedQuery) {
        this.htmlCorrectedQuery = htmlCorrectedQuery;
        return this;
    }
}