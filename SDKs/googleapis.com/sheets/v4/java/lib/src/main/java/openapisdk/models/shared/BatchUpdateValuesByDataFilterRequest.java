package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUpdateValuesByDataFilterRequest
 * The request for updating more than one range of values in a spreadsheet.
**/
public class BatchUpdateValuesByDataFilterRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public DataFilterValueRange[] data;
    public BatchUpdateValuesByDataFilterRequest withData(DataFilterValueRange[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeValuesInResponse")
    public Boolean includeValuesInResponse;
    public BatchUpdateValuesByDataFilterRequest withIncludeValuesInResponse(Boolean includeValuesInResponse) {
        this.includeValuesInResponse = includeValuesInResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseDateTimeRenderOption")
    public BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum responseDateTimeRenderOption;
    public BatchUpdateValuesByDataFilterRequest withResponseDateTimeRenderOption(BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum responseDateTimeRenderOption) {
        this.responseDateTimeRenderOption = responseDateTimeRenderOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseValueRenderOption")
    public BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum responseValueRenderOption;
    public BatchUpdateValuesByDataFilterRequest withResponseValueRenderOption(BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum responseValueRenderOption) {
        this.responseValueRenderOption = responseValueRenderOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueInputOption")
    public BatchUpdateValuesByDataFilterRequestValueInputOptionEnum valueInputOption;
    public BatchUpdateValuesByDataFilterRequest withValueInputOption(BatchUpdateValuesByDataFilterRequestValueInputOptionEnum valueInputOption) {
        this.valueInputOption = valueInputOption;
        return this;
    }
}