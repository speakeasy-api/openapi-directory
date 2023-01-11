package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateADatabaseRequestBodyTitle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public UpdateADatabaseRequestBodyTitleText text;
    public UpdateADatabaseRequestBodyTitle withText(UpdateADatabaseRequestBodyTitleText text) {
        this.text = text;
        return this;
    }
}