package openapisdk.models.shared;


public enum DatabaseInstanceSuspensionReasonEnum {
    SQL_SUSPENSION_REASON_UNSPECIFIED("SQL_SUSPENSION_REASON_UNSPECIFIED"),
    BILLING_ISSUE("BILLING_ISSUE"),
    LEGAL_ISSUE("LEGAL_ISSUE"),
    OPERATIONAL_ISSUE("OPERATIONAL_ISSUE"),
    KMS_KEY_ISSUE("KMS_KEY_ISSUE");

    public final String value;

    private DatabaseInstanceSuspensionReasonEnum(String value) {
        this.value = value;
    }
}
