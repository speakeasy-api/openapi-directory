package openapisdk.models.shared;


public enum VenueTypeEnum {
    EVENT("event"),
    VENUE("venue"),
    ATTRACTION("attraction");

    public final String value;

    private VenueTypeEnum(String value) {
        this.value = value;
    }
}
