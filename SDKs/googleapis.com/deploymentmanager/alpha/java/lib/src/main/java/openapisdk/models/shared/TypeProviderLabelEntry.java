package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TypeProviderLabelEntry
 * Label object for TypeProviders
**/
public class TypeProviderLabelEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public TypeProviderLabelEntry withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public TypeProviderLabelEntry withValue(String value) {
        this.value = value;
        return this;
    }
}