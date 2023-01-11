package openapisdk.models.shared;


public enum ProvisioningIssueReasonEnum {
    REASON_UNSPECIFIED("REASON_UNSPECIFIED"),
    AUTHORIZATION_ISSUE("AUTHORIZATION_ISSUE"),
    RATE_LIMITED("RATE_LIMITED");

    public final String value;

    private ProvisioningIssueReasonEnum(String value) {
        this.value = value;
    }
}
