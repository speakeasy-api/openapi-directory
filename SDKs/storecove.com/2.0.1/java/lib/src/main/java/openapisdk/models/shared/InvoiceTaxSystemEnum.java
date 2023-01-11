package openapisdk.models.shared;


public enum InvoiceTaxSystemEnum {
    TAX_LINE_AMOUNTS("tax_line_amounts"),
    TAX_LINE_PERCENTAGES("tax_line_percentages"),
    TAX_NO_TAX("tax_no_tax");

    public final String value;

    private InvoiceTaxSystemEnum(String value) {
        this.value = value;
    }
}
