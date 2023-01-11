package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryADatabase200ApplicationJsonResultsPropertiesStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public QueryADatabase200ApplicationJsonResultsPropertiesStatus withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("select")
    public QueryADatabase200ApplicationJsonResultsPropertiesStatusSelect select;
    public QueryADatabase200ApplicationJsonResultsPropertiesStatus withSelect(QueryADatabase200ApplicationJsonResultsPropertiesStatusSelect select) {
        this.select = select;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public QueryADatabase200ApplicationJsonResultsPropertiesStatus withType(String type) {
        this.type = type;
        return this;
    }
}