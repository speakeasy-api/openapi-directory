package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployerEmployerAutoEnrolmentPension
 * The employer auto enrolments' pension
**/
public class EmployerEmployerAutoEnrolmentPension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@href")
    public String atHref;
    public EmployerEmployerAutoEnrolmentPension withAtHref(String atHref) {
        this.atHref = atHref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@rel")
    public String atRel;
    public EmployerEmployerAutoEnrolmentPension withAtRel(String atRel) {
        this.atRel = atRel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@title")
    public String atTitle;
    public EmployerEmployerAutoEnrolmentPension withAtTitle(String atTitle) {
        this.atTitle = atTitle;
        return this;
    }
}