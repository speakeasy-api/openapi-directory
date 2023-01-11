package openapisdk.models.shared;


public enum InteractionChannelParticipantEnumTypeEnum {
    SUPERVISOR("supervisor"),
    CUSTOMER("customer"),
    EXTERNAL("external"),
    AGENT("agent"),
    UNKNOWN("unknown");

    public final String value;

    private InteractionChannelParticipantEnumTypeEnum(String value) {
        this.value = value;
    }
}
