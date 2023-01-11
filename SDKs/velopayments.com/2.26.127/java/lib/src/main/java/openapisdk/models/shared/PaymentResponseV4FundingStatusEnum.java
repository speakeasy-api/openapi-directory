package openapisdk.models.shared;


public enum PaymentResponseV4FundingStatusEnum {
    FUNDED("FUNDED"),
    INSTRUCTED("INSTRUCTED"),
    UNFUNDED("UNFUNDED");

    public final String value;

    private PaymentResponseV4FundingStatusEnum(String value) {
        this.value = value;
    }
}
