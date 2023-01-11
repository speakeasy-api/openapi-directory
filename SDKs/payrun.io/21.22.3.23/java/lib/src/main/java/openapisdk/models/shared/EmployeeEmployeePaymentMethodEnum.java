package openapisdk.models.shared;


public enum EmployeeEmployeePaymentMethodEnum {
    NOT_SET("NotSet"),
    CASH("Cash"),
    CHEQUE("Cheque"),
    BACS("BACS"),
    FASTER_PAYMENTS("FasterPayments"),
    OTHER("Other");

    public final String value;

    private EmployeeEmployeePaymentMethodEnum(String value) {
        this.value = value;
    }
}
