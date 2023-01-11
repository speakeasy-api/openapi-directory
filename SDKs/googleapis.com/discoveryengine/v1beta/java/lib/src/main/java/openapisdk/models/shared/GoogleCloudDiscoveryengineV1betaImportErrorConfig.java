package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1betaImportErrorConfig
 * Configuration of destination for Import related errors.
**/
public class GoogleCloudDiscoveryengineV1betaImportErrorConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsPrefix")
    public String gcsPrefix;
    public GoogleCloudDiscoveryengineV1betaImportErrorConfig withGcsPrefix(String gcsPrefix) {
        this.gcsPrefix = gcsPrefix;
        return this;
    }
}