package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateOrganizationNetworkRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyFromNetworkId")
    public String copyFromNetworkId;
    public CreateOrganizationNetworkRequestBody withCopyFromNetworkId(String copyFromNetworkId) {
        this.copyFromNetworkId = copyFromNetworkId;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateOrganizationNetworkRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public CreateOrganizationNetworkRequestBody withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonProperty("productTypes")
    public CreateOrganizationNetworkRequestBodyProductTypesEnum[] productTypes;
    public CreateOrganizationNetworkRequestBody withProductTypes(CreateOrganizationNetworkRequestBodyProductTypesEnum[] productTypes) {
        this.productTypes = productTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public CreateOrganizationNetworkRequestBody withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public CreateOrganizationNetworkRequestBody withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
}