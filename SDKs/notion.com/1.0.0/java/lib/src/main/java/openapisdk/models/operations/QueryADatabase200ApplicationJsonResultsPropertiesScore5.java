package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryADatabase200ApplicationJsonResultsPropertiesScore5 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public QueryADatabase200ApplicationJsonResultsPropertiesScore5 withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("select")
    public QueryADatabase200ApplicationJsonResultsPropertiesScore5Select select;
    public QueryADatabase200ApplicationJsonResultsPropertiesScore5 withSelect(QueryADatabase200ApplicationJsonResultsPropertiesScore5Select select) {
        this.select = select;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public QueryADatabase200ApplicationJsonResultsPropertiesScore5 withType(String type) {
        this.type = type;
        return this;
    }
}