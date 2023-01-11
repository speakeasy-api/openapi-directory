package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput
 * Data specific to iOS app streams.
**/
public class GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundleId")
    public String bundleId;
    public GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
}