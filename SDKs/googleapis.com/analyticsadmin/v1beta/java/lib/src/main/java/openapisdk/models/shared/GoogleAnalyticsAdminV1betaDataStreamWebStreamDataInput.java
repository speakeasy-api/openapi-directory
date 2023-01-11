package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput
 * Data specific to web streams.
**/
public class GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultUri")
    public String defaultUri;
    public GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput withDefaultUri(String defaultUri) {
        this.defaultUri = defaultUri;
        return this;
    }
}