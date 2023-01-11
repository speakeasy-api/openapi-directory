package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1Row
 * A row of report values.
**/
public class GoogleCloudChannelV1Row {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public GoogleCloudChannelV1ReportValue[] values;
    public GoogleCloudChannelV1Row withValues(GoogleCloudChannelV1ReportValue[] values) {
        this.values = values;
        return this;
    }
}