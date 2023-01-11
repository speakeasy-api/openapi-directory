package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NewAttendancePeriodResponseData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long[] id;
    public NewAttendancePeriodResponseData withId(Long[] id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public NewAttendancePeriodResponseData withMessage(String message) {
        this.message = message;
        return this;
    }
}