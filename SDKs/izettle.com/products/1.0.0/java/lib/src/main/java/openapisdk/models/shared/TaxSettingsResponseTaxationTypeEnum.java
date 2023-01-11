package openapisdk.models.shared;


public enum TaxSettingsResponseTaxationTypeEnum {
    NONE("NONE"),
    SALES_TAX("SALES_TAX"),
    VAT("VAT");

    public final String value;

    private TaxSettingsResponseTaxationTypeEnum(String value) {
        this.value = value;
    }
}
