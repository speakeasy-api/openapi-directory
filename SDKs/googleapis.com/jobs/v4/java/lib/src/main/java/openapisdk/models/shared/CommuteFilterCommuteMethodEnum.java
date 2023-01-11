package openapisdk.models.shared;


public enum CommuteFilterCommuteMethodEnum {
    COMMUTE_METHOD_UNSPECIFIED("COMMUTE_METHOD_UNSPECIFIED"),
    DRIVING("DRIVING"),
    TRANSIT("TRANSIT"),
    WALKING("WALKING"),
    CYCLING("CYCLING"),
    TRANSIT_ACCESSIBLE("TRANSIT_ACCESSIBLE");

    public final String value;

    private CommuteFilterCommuteMethodEnum(String value) {
        this.value = value;
    }
}
