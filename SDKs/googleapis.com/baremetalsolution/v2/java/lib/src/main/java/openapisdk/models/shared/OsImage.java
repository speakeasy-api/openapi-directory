package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsImage
 * Operation System image.
**/
public class OsImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicableInstanceTypes")
    public String[] applicableInstanceTypes;
    public OsImage withApplicableInstanceTypes(String[] applicableInstanceTypes) {
        this.applicableInstanceTypes = applicableInstanceTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public OsImage withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public OsImage withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OsImage withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedNetworkTemplates")
    public ServerNetworkTemplate[] supportedNetworkTemplates;
    public OsImage withSupportedNetworkTemplates(ServerNetworkTemplate[] supportedNetworkTemplates) {
        this.supportedNetworkTemplates = supportedNetworkTemplates;
        return this;
    }
}