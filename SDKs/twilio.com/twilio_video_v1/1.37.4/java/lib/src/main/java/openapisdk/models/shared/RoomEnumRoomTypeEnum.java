package openapisdk.models.shared;


public enum RoomEnumRoomTypeEnum {
    GO("go"),
    PEER_TO_PEER("peer-to-peer"),
    GROUP("group"),
    GROUP_SMALL("group-small");

    public final String value;

    private RoomEnumRoomTypeEnum(String value) {
        this.value = value;
    }
}
