package openapisdk.models.shared;


public enum GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum {
    SETUP_ERROR_UNSPECIFIED("SETUP_ERROR_UNSPECIFIED"),
    ERROR_INVALID_BASE_SETUP("ERROR_INVALID_BASE_SETUP"),
    ERROR_MISSING_EXTERNAL_SIGNING_KEY("ERROR_MISSING_EXTERNAL_SIGNING_KEY"),
    ERROR_NOT_ALL_SERVICES_ENROLLED("ERROR_NOT_ALL_SERVICES_ENROLLED"),
    ERROR_SETUP_CHECK_FAILED("ERROR_SETUP_CHECK_FAILED");

    public final String value;

    private GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum(String value) {
        this.value = value;
    }
}
