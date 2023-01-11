package openapisdk.models.operations;


public enum AdexchangebuyerProposalsPatchUpdateActionEnum {
    ACCEPT("accept"),
    CANCEL("cancel"),
    PROPOSE("propose"),
    PROPOSE_AND_ACCEPT("proposeAndAccept"),
    UNKNOWN_ACTION("unknownAction"),
    UPDATE_NON_TERMS("updateNonTerms");

    public final String value;

    private AdexchangebuyerProposalsPatchUpdateActionEnum(String value) {
        this.value = value;
    }
}
