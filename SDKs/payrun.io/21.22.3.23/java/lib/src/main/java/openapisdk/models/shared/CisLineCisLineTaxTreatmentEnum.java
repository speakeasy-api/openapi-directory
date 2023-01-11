package openapisdk.models.shared;


public enum CisLineCisLineTaxTreatmentEnum {
    TAXABLE("Taxable"),
    NON_TAXABLE("NonTaxable"),
    NOTIONAL("Notional"),
    MATERIALS("Materials");

    public final String value;

    private CisLineCisLineTaxTreatmentEnum(String value) {
        this.value = value;
    }
}
