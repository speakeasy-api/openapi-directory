package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryADatabase200ApplicationJsonResultsPropertiesAuthor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public QueryADatabase200ApplicationJsonResultsPropertiesAuthor withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multi_select")
    public QueryADatabase200ApplicationJsonResultsPropertiesAuthorMultiSelect[] multiSelect;
    public QueryADatabase200ApplicationJsonResultsPropertiesAuthor withMultiSelect(QueryADatabase200ApplicationJsonResultsPropertiesAuthorMultiSelect[] multiSelect) {
        this.multiSelect = multiSelect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public QueryADatabase200ApplicationJsonResultsPropertiesAuthor withType(String type) {
        this.type = type;
        return this;
    }
}