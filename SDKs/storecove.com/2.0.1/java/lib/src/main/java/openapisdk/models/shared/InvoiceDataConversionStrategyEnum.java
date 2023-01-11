package openapisdk.models.shared;


public enum InvoiceDataConversionStrategyEnum {
    UBL("ubl"),
    CII("cii"),
    IDOC("idoc");

    public final String value;

    private InvoiceDataConversionStrategyEnum(String value) {
        this.value = value;
    }
}
