package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateOrganizationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api")
    public UpdateOrganizationRequestBodyApi api;
    public UpdateOrganizationRequestBody withApi(UpdateOrganizationRequestBodyApi api) {
        this.api = api;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateOrganizationRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}