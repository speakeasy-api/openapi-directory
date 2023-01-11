package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NewAttendancePeriodRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attendances")
    public NewAttendancePeriodRequestAttendances[] attendances;
    public NewAttendancePeriodRequest withAttendances(NewAttendancePeriodRequestAttendances[] attendances) {
        this.attendances = attendances;
        return this;
    }
}