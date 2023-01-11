package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateOrganizationConfigTemplateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateOrganizationConfigTemplateRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public UpdateOrganizationConfigTemplateRequestBody withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
}