package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ControllersAdvisoryItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public ControllersAdvisoryItemAttributes attributes;
    public ControllersAdvisoryItem withAttributes(ControllersAdvisoryItemAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ControllersAdvisoryItem withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ControllersAdvisoryItem withType(String type) {
        this.type = type;
        return this;
    }
}