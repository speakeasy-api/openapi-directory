package openapisdk.models.shared;


public enum GoogleChromeManagementV1HttpsLatencyRoutineDataProblemEnum {
    HTTPS_LATENCY_PROBLEM_UNSPECIFIED("HTTPS_LATENCY_PROBLEM_UNSPECIFIED"),
    FAILED_DNS_RESOLUTIONS("FAILED_DNS_RESOLUTIONS"),
    FAILED_HTTPS_REQUESTS("FAILED_HTTPS_REQUESTS"),
    HIGH_LATENCY("HIGH_LATENCY"),
    VERY_HIGH_LATENCY("VERY_HIGH_LATENCY");

    public final String value;

    private GoogleChromeManagementV1HttpsLatencyRoutineDataProblemEnum(String value) {
        this.value = value;
    }
}
