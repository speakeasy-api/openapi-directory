package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeEmployeePaySchedule
 * The employees' pay schedule
**/
public class EmployeeEmployeePaySchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@href")
    public String atHref;
    public EmployeeEmployeePaySchedule withAtHref(String atHref) {
        this.atHref = atHref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@rel")
    public String atRel;
    public EmployeeEmployeePaySchedule withAtRel(String atRel) {
        this.atRel = atRel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@title")
    public String atTitle;
    public EmployeeEmployeePaySchedule withAtTitle(String atTitle) {
        this.atTitle = atTitle;
        return this;
    }
}