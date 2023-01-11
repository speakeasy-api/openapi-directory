package openapisdk.models.operations;


public enum AdexchangebuyerProposalsUpdateUpdateActionEnum {
    ACCEPT("accept"),
    CANCEL("cancel"),
    PROPOSE("propose"),
    PROPOSE_AND_ACCEPT("proposeAndAccept"),
    UNKNOWN_ACTION("unknownAction"),
    UPDATE_NON_TERMS("updateNonTerms");

    public final String value;

    private AdexchangebuyerProposalsUpdateUpdateActionEnum(String value) {
        this.value = value;
    }
}
