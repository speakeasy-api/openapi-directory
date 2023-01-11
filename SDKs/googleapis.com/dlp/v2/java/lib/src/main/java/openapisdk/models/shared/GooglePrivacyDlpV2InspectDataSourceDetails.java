package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2InspectDataSourceDetails
 * The results of an inspect DataSource job.
**/
public class GooglePrivacyDlpV2InspectDataSourceDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedOptions")
    public GooglePrivacyDlpV2RequestedOptions requestedOptions;
    public GooglePrivacyDlpV2InspectDataSourceDetails withRequestedOptions(GooglePrivacyDlpV2RequestedOptions requestedOptions) {
        this.requestedOptions = requestedOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public GooglePrivacyDlpV2Result result;
    public GooglePrivacyDlpV2InspectDataSourceDetails withResult(GooglePrivacyDlpV2Result result) {
        this.result = result;
        return this;
    }
}