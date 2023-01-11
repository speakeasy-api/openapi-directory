package openapisdk.models.shared;


public enum FxSummaryFundingStatusEnum {
    FUNDED("FUNDED"),
    INSTRUCTED("INSTRUCTED"),
    UNFUNDED("UNFUNDED");

    public final String value;

    private FxSummaryFundingStatusEnum(String value) {
        this.value = value;
    }
}
