package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveADatabase200ApplicationJsonPropertiesTypeSelect {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public RetrieveADatabase200ApplicationJsonPropertiesTypeSelectOptions[] options;
    public RetrieveADatabase200ApplicationJsonPropertiesTypeSelect withOptions(RetrieveADatabase200ApplicationJsonPropertiesTypeSelectOptions[] options) {
        this.options = options;
        return this;
    }
}