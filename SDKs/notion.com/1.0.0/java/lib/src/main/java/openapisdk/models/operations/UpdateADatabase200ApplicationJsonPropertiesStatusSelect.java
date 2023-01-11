package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateADatabase200ApplicationJsonPropertiesStatusSelect {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public UpdateADatabase200ApplicationJsonPropertiesStatusSelectOptions[] options;
    public UpdateADatabase200ApplicationJsonPropertiesStatusSelect withOptions(UpdateADatabase200ApplicationJsonPropertiesStatusSelectOptions[] options) {
        this.options = options;
        return this;
    }
}