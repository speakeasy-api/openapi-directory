package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveADatabase200ApplicationJsonPropertiesPublisherSelect {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public RetrieveADatabase200ApplicationJsonPropertiesPublisherSelectOptions[] options;
    public RetrieveADatabase200ApplicationJsonPropertiesPublisherSelect withOptions(RetrieveADatabase200ApplicationJsonPropertiesPublisherSelectOptions[] options) {
        this.options = options;
        return this;
    }
}