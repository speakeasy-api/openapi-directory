package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface
 * Logical interface.
**/
public class GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceTypeEnum type;
    public GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface withType(GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceTypeEnum type) {
        this.type = type;
        return this;
    }
}