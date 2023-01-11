package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveADatabase200ApplicationJsonPropertiesScore5Select {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public RetrieveADatabase200ApplicationJsonPropertiesScore5SelectOptions[] options;
    public RetrieveADatabase200ApplicationJsonPropertiesScore5Select withOptions(RetrieveADatabase200ApplicationJsonPropertiesScore5SelectOptions[] options) {
        this.options = options;
        return this;
    }
}