package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryADatabase200ApplicationJsonResultsPropertiesType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public QueryADatabase200ApplicationJsonResultsPropertiesType withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("select")
    public QueryADatabase200ApplicationJsonResultsPropertiesTypeSelect select;
    public QueryADatabase200ApplicationJsonResultsPropertiesType withSelect(QueryADatabase200ApplicationJsonResultsPropertiesTypeSelect select) {
        this.select = select;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public QueryADatabase200ApplicationJsonResultsPropertiesType withType(String type) {
        this.type = type;
        return this;
    }
}