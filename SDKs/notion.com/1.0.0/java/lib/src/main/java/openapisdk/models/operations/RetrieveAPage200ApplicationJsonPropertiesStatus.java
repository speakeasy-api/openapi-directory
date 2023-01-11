package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveAPage200ApplicationJsonPropertiesStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RetrieveAPage200ApplicationJsonPropertiesStatus withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("select")
    public RetrieveAPage200ApplicationJsonPropertiesStatusSelect select;
    public RetrieveAPage200ApplicationJsonPropertiesStatus withSelect(RetrieveAPage200ApplicationJsonPropertiesStatusSelect select) {
        this.select = select;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RetrieveAPage200ApplicationJsonPropertiesStatus withType(String type) {
        this.type = type;
        return this;
    }
}