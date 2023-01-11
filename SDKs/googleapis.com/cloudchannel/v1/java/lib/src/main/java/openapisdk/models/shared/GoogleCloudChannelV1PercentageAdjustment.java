package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1PercentageAdjustment
 * An adjustment that applies a flat markup or markdown to an entire bill.
**/
public class GoogleCloudChannelV1PercentageAdjustment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentage")
    public GoogleTypeDecimal percentage;
    public GoogleCloudChannelV1PercentageAdjustment withPercentage(GoogleTypeDecimal percentage) {
        this.percentage = percentage;
        return this;
    }
}