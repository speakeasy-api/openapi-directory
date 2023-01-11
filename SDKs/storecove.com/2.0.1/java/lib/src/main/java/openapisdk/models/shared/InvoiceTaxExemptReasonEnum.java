package openapisdk.models.shared;


public enum InvoiceTaxExemptReasonEnum {
    EXPORT("export"),
    REVERSE_CHARGE("reverse_charge"),
    ZERO_RATED("zero_rated"),
    EXEMPT("exempt"),
    OUTSIDE_SCOPE("outside_scope"),
    INTRA_COMMUNITY("intra_community");

    public final String value;

    private InvoiceTaxExemptReasonEnum(String value) {
        this.value = value;
    }
}
