package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveAPage200ApplicationJsonPropertiesPublisher {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RetrieveAPage200ApplicationJsonPropertiesPublisher withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("select")
    public RetrieveAPage200ApplicationJsonPropertiesPublisherSelect select;
    public RetrieveAPage200ApplicationJsonPropertiesPublisher withSelect(RetrieveAPage200ApplicationJsonPropertiesPublisherSelect select) {
        this.select = select;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RetrieveAPage200ApplicationJsonPropertiesPublisher withType(String type) {
        this.type = type;
        return this;
    }
}