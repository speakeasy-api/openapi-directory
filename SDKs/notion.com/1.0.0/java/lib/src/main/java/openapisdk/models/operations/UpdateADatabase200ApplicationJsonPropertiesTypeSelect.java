package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateADatabase200ApplicationJsonPropertiesTypeSelect {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public UpdateADatabase200ApplicationJsonPropertiesTypeSelectOptions[] options;
    public UpdateADatabase200ApplicationJsonPropertiesTypeSelect withOptions(UpdateADatabase200ApplicationJsonPropertiesTypeSelectOptions[] options) {
        this.options = options;
        return this;
    }
}