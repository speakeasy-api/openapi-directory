package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SystemApksListResponse
 * Response to list previously created system APK variants.
**/
public class SystemApksListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variants")
    public Variant[] variants;
    public SystemApksListResponse withVariants(Variant[] variants) {
        this.variants = variants;
        return this;
    }
}