package openapisdk.models.shared;


public enum HiTypeEnumEnum {
    OP_CONSULTATION("OPConsultation"),
    PRESCRIPTION("Prescription"),
    DISCHARGE_SUMMARY("DischargeSummary"),
    DIAGNOSTIC_REPORT("DiagnosticReport");

    public final String value;

    private HiTypeEnumEnum(String value) {
        this.value = value;
    }
}
