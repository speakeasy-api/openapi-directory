package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateADatabase200ApplicationJsonPropertiesPublisherSelect {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public UpdateADatabase200ApplicationJsonPropertiesPublisherSelectOptions[] options;
    public UpdateADatabase200ApplicationJsonPropertiesPublisherSelect withOptions(UpdateADatabase200ApplicationJsonPropertiesPublisherSelectOptions[] options) {
        this.options = options;
        return this;
    }
}