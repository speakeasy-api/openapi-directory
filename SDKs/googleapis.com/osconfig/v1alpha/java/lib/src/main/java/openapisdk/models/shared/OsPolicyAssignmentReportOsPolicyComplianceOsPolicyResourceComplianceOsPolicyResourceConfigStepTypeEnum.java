package openapisdk.models.shared;


public enum OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStepTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    VALIDATION("VALIDATION"),
    DESIRED_STATE_CHECK("DESIRED_STATE_CHECK"),
    DESIRED_STATE_ENFORCEMENT("DESIRED_STATE_ENFORCEMENT"),
    DESIRED_STATE_CHECK_POST_ENFORCEMENT("DESIRED_STATE_CHECK_POST_ENFORCEMENT");

    public final String value;

    private OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStepTypeEnum(String value) {
        this.value = value;
    }
}
