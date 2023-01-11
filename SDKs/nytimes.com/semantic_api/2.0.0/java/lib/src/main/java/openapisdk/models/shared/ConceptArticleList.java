package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConceptArticleList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public ConceptArticleListResults[] results;
    public ConceptArticleList withResults(ConceptArticleListResults[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public ConceptArticleList withTotal(Long total) {
        this.total = total;
        return this;
    }
}