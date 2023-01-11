package openapisdk.models.shared;


public enum InvoiceInvoiceTypeEnum {
    INVOICE_TYPE_UNSPECIFIED("INVOICE_TYPE_UNSPECIFIED"),
    INVOICE_TYPE_CREDIT("INVOICE_TYPE_CREDIT"),
    INVOICE_TYPE_INVOICE("INVOICE_TYPE_INVOICE");

    public final String value;

    private InvoiceInvoiceTypeEnum(String value) {
        this.value = value;
    }
}
