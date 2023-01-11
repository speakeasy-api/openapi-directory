package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveADatabase200ApplicationJsonPropertiesPublisher {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RetrieveADatabase200ApplicationJsonPropertiesPublisher withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("select")
    public RetrieveADatabase200ApplicationJsonPropertiesPublisherSelect select;
    public RetrieveADatabase200ApplicationJsonPropertiesPublisher withSelect(RetrieveADatabase200ApplicationJsonPropertiesPublisherSelect select) {
        this.select = select;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RetrieveADatabase200ApplicationJsonPropertiesPublisher withType(String type) {
        this.type = type;
        return this;
    }
}