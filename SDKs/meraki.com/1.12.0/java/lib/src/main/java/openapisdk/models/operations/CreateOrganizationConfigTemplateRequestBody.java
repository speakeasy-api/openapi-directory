package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateOrganizationConfigTemplateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyFromNetworkId")
    public String copyFromNetworkId;
    public CreateOrganizationConfigTemplateRequestBody withCopyFromNetworkId(String copyFromNetworkId) {
        this.copyFromNetworkId = copyFromNetworkId;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateOrganizationConfigTemplateRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public CreateOrganizationConfigTemplateRequestBody withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
}