package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUpdateValuesRequest
 * The request for updating more than one range of values in a spreadsheet.
**/
public class BatchUpdateValuesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ValueRange[] data;
    public BatchUpdateValuesRequest withData(ValueRange[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeValuesInResponse")
    public Boolean includeValuesInResponse;
    public BatchUpdateValuesRequest withIncludeValuesInResponse(Boolean includeValuesInResponse) {
        this.includeValuesInResponse = includeValuesInResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseDateTimeRenderOption")
    public BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum responseDateTimeRenderOption;
    public BatchUpdateValuesRequest withResponseDateTimeRenderOption(BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum responseDateTimeRenderOption) {
        this.responseDateTimeRenderOption = responseDateTimeRenderOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseValueRenderOption")
    public BatchUpdateValuesRequestResponseValueRenderOptionEnum responseValueRenderOption;
    public BatchUpdateValuesRequest withResponseValueRenderOption(BatchUpdateValuesRequestResponseValueRenderOptionEnum responseValueRenderOption) {
        this.responseValueRenderOption = responseValueRenderOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueInputOption")
    public BatchUpdateValuesRequestValueInputOptionEnum valueInputOption;
    public BatchUpdateValuesRequest withValueInputOption(BatchUpdateValuesRequestValueInputOptionEnum valueInputOption) {
        this.valueInputOption = valueInputOption;
        return this;
    }
}