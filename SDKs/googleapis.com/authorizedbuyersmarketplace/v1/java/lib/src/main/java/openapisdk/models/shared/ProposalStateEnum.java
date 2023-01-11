package openapisdk.models.shared;


public enum ProposalStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    BUYER_REVIEW_REQUESTED("BUYER_REVIEW_REQUESTED"),
    SELLER_REVIEW_REQUESTED("SELLER_REVIEW_REQUESTED"),
    BUYER_ACCEPTANCE_REQUESTED("BUYER_ACCEPTANCE_REQUESTED"),
    FINALIZED("FINALIZED"),
    TERMINATED("TERMINATED");

    public final String value;

    private ProposalStateEnum(String value) {
        this.value = value;
    }
}
