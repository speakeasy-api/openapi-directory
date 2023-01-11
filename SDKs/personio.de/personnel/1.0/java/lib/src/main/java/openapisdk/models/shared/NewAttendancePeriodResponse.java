package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NewAttendancePeriodResponse {
    @JsonProperty("data")
    public NewAttendancePeriodResponseData data;
    public NewAttendancePeriodResponse withData(NewAttendancePeriodResponseData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("success")
    public Boolean success;
    public NewAttendancePeriodResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}