package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePageProperties200ApplicationJsonPropertiesPublisher {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdatePageProperties200ApplicationJsonPropertiesPublisher withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("select")
    public UpdatePageProperties200ApplicationJsonPropertiesPublisherSelect select;
    public UpdatePageProperties200ApplicationJsonPropertiesPublisher withSelect(UpdatePageProperties200ApplicationJsonPropertiesPublisherSelect select) {
        this.select = select;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UpdatePageProperties200ApplicationJsonPropertiesPublisher withType(String type) {
        this.type = type;
        return this;
    }
}