package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AttendancePeriodsResponse {
    @JsonProperty("data")
    public AttendancePeriodsResponseData[] data;
    public AttendancePeriodsResponse withData(AttendancePeriodsResponseData[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Long limit;
    public AttendancePeriodsResponse withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Long offset;
    public AttendancePeriodsResponse withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @JsonProperty("success")
    public Boolean success;
    public AttendancePeriodsResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}