package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1alphaImportErrorConfig
 * Configuration of destination for Import related errors.
**/
public class GoogleCloudDiscoveryengineV1alphaImportErrorConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsPrefix")
    public String gcsPrefix;
    public GoogleCloudDiscoveryengineV1alphaImportErrorConfig withGcsPrefix(String gcsPrefix) {
        this.gcsPrefix = gcsPrefix;
        return this;
    }
}