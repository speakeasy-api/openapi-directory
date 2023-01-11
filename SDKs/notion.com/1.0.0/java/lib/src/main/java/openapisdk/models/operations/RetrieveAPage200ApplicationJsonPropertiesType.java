package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveAPage200ApplicationJsonPropertiesType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RetrieveAPage200ApplicationJsonPropertiesType withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("select")
    public RetrieveAPage200ApplicationJsonPropertiesTypeSelect select;
    public RetrieveAPage200ApplicationJsonPropertiesType withSelect(RetrieveAPage200ApplicationJsonPropertiesTypeSelect select) {
        this.select = select;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RetrieveAPage200ApplicationJsonPropertiesType withType(String type) {
        this.type = type;
        return this;
    }
}