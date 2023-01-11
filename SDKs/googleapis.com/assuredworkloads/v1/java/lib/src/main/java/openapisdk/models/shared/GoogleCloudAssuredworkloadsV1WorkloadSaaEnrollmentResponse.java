package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse
 * Signed Access Approvals (SAA) enrollment response.
**/
public class GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("setupErrors")
    public GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum[] setupErrors;
    public GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse withSetupErrors(GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum[] setupErrors) {
        this.setupErrors = setupErrors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("setupStatus")
    public GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum setupStatus;
    public GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse withSetupStatus(GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum setupStatus) {
        this.setupStatus = setupStatus;
        return this;
    }
}