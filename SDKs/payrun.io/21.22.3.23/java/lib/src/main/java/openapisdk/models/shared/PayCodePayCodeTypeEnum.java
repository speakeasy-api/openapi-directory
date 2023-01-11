package openapisdk.models.shared;


public enum PayCodePayCodeTypeEnum {
    NOT_SET("NotSet"),
    PAYMENT("Payment"),
    DEDUCTION("Deduction");

    public final String value;

    private PayCodePayCodeTypeEnum(String value) {
        this.value = value;
    }
}
