package openapisdk.models.shared;


public enum SubContractorSubContractorPaymentMethodEnum {
    NOT_SET("NotSet"),
    CASH("Cash"),
    CHEQUE("Cheque"),
    BACS("BACS"),
    FASTER_PAYMENTS("FasterPayments"),
    OTHER("Other");

    public final String value;

    private SubContractorSubContractorPaymentMethodEnum(String value) {
        this.value = value;
    }
}
