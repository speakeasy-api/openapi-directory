package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudBillingBudgetsV1CustomPeriod
 * All date times begin at 12 AM US and Canadian Pacific Time (UTC-8).
**/
public class GoogleCloudBillingBudgetsV1CustomPeriod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public GoogleTypeDate endDate;
    public GoogleCloudBillingBudgetsV1CustomPeriod withEndDate(GoogleTypeDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public GoogleTypeDate startDate;
    public GoogleCloudBillingBudgetsV1CustomPeriod withStartDate(GoogleTypeDate startDate) {
        this.startDate = startDate;
        return this;
    }
}