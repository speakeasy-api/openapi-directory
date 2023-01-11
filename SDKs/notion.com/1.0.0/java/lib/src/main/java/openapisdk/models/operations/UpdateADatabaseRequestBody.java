package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateADatabaseRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public UpdateADatabaseRequestBodyProperties properties;
    public UpdateADatabaseRequestBody withProperties(UpdateADatabaseRequestBodyProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public UpdateADatabaseRequestBodyTitle[] title;
    public UpdateADatabaseRequestBody withTitle(UpdateADatabaseRequestBodyTitle[] title) {
        this.title = title;
        return this;
    }
}