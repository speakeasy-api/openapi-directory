package openapisdk.models.shared;


public enum VideoRoomSummaryEnumRoomTypeEnum {
    GO("go"),
    PEER_TO_PEER("peer_to_peer"),
    GROUP("group"),
    GROUP_SMALL("group_small");

    public final String value;

    private VideoRoomSummaryEnumRoomTypeEnum(String value) {
        this.value = value;
    }
}
