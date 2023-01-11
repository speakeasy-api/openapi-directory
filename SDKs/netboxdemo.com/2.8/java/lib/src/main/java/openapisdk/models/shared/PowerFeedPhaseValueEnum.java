package openapisdk.models.shared;


public enum PowerFeedPhaseValueEnum {
    SINGLE_PHASE("single-phase"),
    THREE_PHASE("three-phase");

    public final String value;

    private PowerFeedPhaseValueEnum(String value) {
        this.value = value;
    }
}
