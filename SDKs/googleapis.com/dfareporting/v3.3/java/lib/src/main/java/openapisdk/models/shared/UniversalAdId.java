package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UniversalAdId
 * A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID.
**/
public class UniversalAdId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registry")
    public UniversalAdIdRegistryEnum registry;
    public UniversalAdId withRegistry(UniversalAdIdRegistryEnum registry) {
        this.registry = registry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public UniversalAdId withValue(String value) {
        this.value = value;
        return this;
    }
}