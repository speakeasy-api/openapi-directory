package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1ImportErrorsConfig
 * Configuration of destination for Import related errors.
**/
public class GoogleCloudRecommendationengineV1beta1ImportErrorsConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsPrefix")
    public String gcsPrefix;
    public GoogleCloudRecommendationengineV1beta1ImportErrorsConfig withGcsPrefix(String gcsPrefix) {
        this.gcsPrefix = gcsPrefix;
        return this;
    }
}