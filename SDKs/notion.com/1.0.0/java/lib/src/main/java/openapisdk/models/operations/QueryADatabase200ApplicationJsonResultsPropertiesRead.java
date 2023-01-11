package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryADatabase200ApplicationJsonResultsPropertiesRead {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkbox")
    public Boolean checkbox;
    public QueryADatabase200ApplicationJsonResultsPropertiesRead withCheckbox(Boolean checkbox) {
        this.checkbox = checkbox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public QueryADatabase200ApplicationJsonResultsPropertiesRead withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public QueryADatabase200ApplicationJsonResultsPropertiesRead withType(String type) {
        this.type = type;
        return this;
    }
}