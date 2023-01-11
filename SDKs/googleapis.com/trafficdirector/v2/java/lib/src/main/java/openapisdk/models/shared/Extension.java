package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Extension
 * Version and identification for an Envoy extension. [#next-free-field: 6]
**/
public class Extension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public Extension withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public Extension withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Extension withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("typeDescriptor")
    public String typeDescriptor;
    public Extension withTypeDescriptor(String typeDescriptor) {
        this.typeDescriptor = typeDescriptor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public BuildVersion version;
    public Extension withVersion(BuildVersion version) {
        this.version = version;
        return this;
    }
}