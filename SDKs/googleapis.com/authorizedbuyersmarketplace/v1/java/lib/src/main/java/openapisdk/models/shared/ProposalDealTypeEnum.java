package openapisdk.models.shared;


public enum ProposalDealTypeEnum {
    DEAL_TYPE_UNSPECIFIED("DEAL_TYPE_UNSPECIFIED"),
    PREFERRED_DEAL("PREFERRED_DEAL"),
    PRIVATE_AUCTION("PRIVATE_AUCTION"),
    PROGRAMMATIC_GUARANTEED("PROGRAMMATIC_GUARANTEED");

    public final String value;

    private ProposalDealTypeEnum(String value) {
        this.value = value;
    }
}
