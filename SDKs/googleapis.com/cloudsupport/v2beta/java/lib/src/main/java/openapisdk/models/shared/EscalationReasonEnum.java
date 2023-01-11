package openapisdk.models.shared;


public enum EscalationReasonEnum {
    REASON_UNSPECIFIED("REASON_UNSPECIFIED"),
    RESOLUTION_TIME("RESOLUTION_TIME"),
    TECHNICAL_EXPERTISE("TECHNICAL_EXPERTISE"),
    BUSINESS_IMPACT("BUSINESS_IMPACT");

    public final String value;

    private EscalationReasonEnum(String value) {
        this.value = value;
    }
}
