package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePagePropertiesRequestBodyPropertiesStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("select")
    public UpdatePagePropertiesRequestBodyPropertiesStatusSelect select;
    public UpdatePagePropertiesRequestBodyPropertiesStatus withSelect(UpdatePagePropertiesRequestBodyPropertiesStatusSelect select) {
        this.select = select;
        return this;
    }
}