package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelect {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions[] options;
    public RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelect withOptions(RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions[] options) {
        this.options = options;
        return this;
    }
}