package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelect {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions[] options;
    public UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelect withOptions(UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions[] options) {
        this.options = options;
        return this;
    }
}