package openapisdk.models.shared;


public enum EventStatusCodeEnum {
    ONSALE("onsale"),
    OFFSALE("offsale"),
    CANCELED("canceled"),
    POSTPONED("postponed"),
    RESCHEDULED("rescheduled");

    public final String value;

    private EventStatusCodeEnum(String value) {
        this.value = value;
    }
}
