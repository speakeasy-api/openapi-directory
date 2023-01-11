package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServerNetworkTemplate
 * Network template.
**/
public class ServerNetworkTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicableInstanceTypes")
    public String[] applicableInstanceTypes;
    public ServerNetworkTemplate withApplicableInstanceTypes(String[] applicableInstanceTypes) {
        this.applicableInstanceTypes = applicableInstanceTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logicalInterfaces")
    public GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface[] logicalInterfaces;
    public ServerNetworkTemplate withLogicalInterfaces(GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface[] logicalInterfaces) {
        this.logicalInterfaces = logicalInterfaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ServerNetworkTemplate withName(String name) {
        this.name = name;
        return this;
    }
}