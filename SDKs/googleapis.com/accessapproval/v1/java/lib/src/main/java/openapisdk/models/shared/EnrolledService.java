package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnrolledService
 * Represents the enrollment of a cloud resource into a specific service.
**/
public class EnrolledService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudProduct")
    public String cloudProduct;
    public EnrolledService withCloudProduct(String cloudProduct) {
        this.cloudProduct = cloudProduct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enrollmentLevel")
    public EnrolledServiceEnrollmentLevelEnum enrollmentLevel;
    public EnrolledService withEnrollmentLevel(EnrolledServiceEnrollmentLevelEnum enrollmentLevel) {
        this.enrollmentLevel = enrollmentLevel;
        return this;
    }
}