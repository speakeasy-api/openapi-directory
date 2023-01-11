package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveADatabase200ApplicationJsonPropertiesStatusSelect {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public RetrieveADatabase200ApplicationJsonPropertiesStatusSelectOptions[] options;
    public RetrieveADatabase200ApplicationJsonPropertiesStatusSelect withOptions(RetrieveADatabase200ApplicationJsonPropertiesStatusSelectOptions[] options) {
        this.options = options;
        return this;
    }
}