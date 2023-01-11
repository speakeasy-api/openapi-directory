package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QuoteResponseV3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fxSummaries")
    public QuoteFxSummaryV3[] fxSummaries;
    public QuoteResponseV3 withFxSummaries(QuoteFxSummaryV3[] fxSummaries) {
        this.fxSummaries = fxSummaries;
        return this;
    }
}