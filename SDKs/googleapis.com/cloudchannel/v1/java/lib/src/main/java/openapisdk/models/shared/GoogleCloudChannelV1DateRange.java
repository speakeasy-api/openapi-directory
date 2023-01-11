package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1DateRange
 * A representation of usage or invoice date ranges.
**/
public class GoogleCloudChannelV1DateRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceEndDate")
    public GoogleTypeDate invoiceEndDate;
    public GoogleCloudChannelV1DateRange withInvoiceEndDate(GoogleTypeDate invoiceEndDate) {
        this.invoiceEndDate = invoiceEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceStartDate")
    public GoogleTypeDate invoiceStartDate;
    public GoogleCloudChannelV1DateRange withInvoiceStartDate(GoogleTypeDate invoiceStartDate) {
        this.invoiceStartDate = invoiceStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageEndDateTime")
    public GoogleTypeDateTime usageEndDateTime;
    public GoogleCloudChannelV1DateRange withUsageEndDateTime(GoogleTypeDateTime usageEndDateTime) {
        this.usageEndDateTime = usageEndDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageStartDateTime")
    public GoogleTypeDateTime usageStartDateTime;
    public GoogleCloudChannelV1DateRange withUsageStartDateTime(GoogleTypeDateTime usageStartDateTime) {
        this.usageStartDateTime = usageStartDateTime;
        return this;
    }
}