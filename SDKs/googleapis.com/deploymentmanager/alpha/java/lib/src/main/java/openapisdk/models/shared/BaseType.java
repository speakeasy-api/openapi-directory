package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BaseType
 * BaseType that describes a service-backed Type.
**/
public class BaseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectionOverrides")
    public CollectionOverride[] collectionOverrides;
    public BaseType withCollectionOverrides(CollectionOverride[] collectionOverrides) {
        this.collectionOverrides = collectionOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credential")
    public Credential credential;
    public BaseType withCredential(Credential credential) {
        this.credential = credential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("descriptorUrl")
    public String descriptorUrl;
    public BaseType withDescriptorUrl(String descriptorUrl) {
        this.descriptorUrl = descriptorUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public Options options;
    public BaseType withOptions(Options options) {
        this.options = options;
        return this;
    }
}