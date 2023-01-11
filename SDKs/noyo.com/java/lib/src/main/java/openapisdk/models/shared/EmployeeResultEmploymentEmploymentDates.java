package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeResultEmploymentEmploymentDates
 * Employee employment dates
**/
public class EmployeeResultEmploymentEmploymentDates {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("full_time_start")
    public String fullTimeStart;
    public EmployeeResultEmploymentEmploymentDates withFullTimeStart(String fullTimeStart) {
        this.fullTimeStart = fullTimeStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hire_date")
    public LocalDate hireDate;
    public EmployeeResultEmploymentEmploymentDates withHireDate(LocalDate hireDate) {
        this.hireDate = hireDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rehire")
    public String rehire;
    public EmployeeResultEmploymentEmploymentDates withRehire(String rehire) {
        this.rehire = rehire;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retirement")
    public String retirement;
    public EmployeeResultEmploymentEmploymentDates withRetirement(String retirement) {
        this.retirement = retirement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terminated")
    public String terminated;
    public EmployeeResultEmploymentEmploymentDates withTerminated(String terminated) {
        this.terminated = terminated;
        return this;
    }
}