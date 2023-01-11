package openapisdk.models.shared;


public enum PaymentResponseV3FundingStatusEnum {
    FUNDED("FUNDED"),
    INSTRUCTED("INSTRUCTED"),
    UNFUNDED("UNFUNDED");

    public final String value;

    private PaymentResponseV3FundingStatusEnum(String value) {
        this.value = value;
    }
}
