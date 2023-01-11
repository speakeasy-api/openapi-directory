package openapisdk.models.shared;


public enum ProposalProposalStateEnum {
    PROPOSAL_STATE_UNSPECIFIED("PROPOSAL_STATE_UNSPECIFIED"),
    PROPOSED("PROPOSED"),
    BUYER_ACCEPTED("BUYER_ACCEPTED"),
    SELLER_ACCEPTED("SELLER_ACCEPTED"),
    CANCELED("CANCELED"),
    FINALIZED("FINALIZED");

    public final String value;

    private ProposalProposalStateEnum(String value) {
        this.value = value;
    }
}
