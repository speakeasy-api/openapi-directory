package openapisdk.models.shared;


public enum VideoAgeGatingVideoGameRatingEnum {
    ANYONE("anyone"),
    M15_PLUS("m15Plus"),
    M16_PLUS("m16Plus"),
    M17_PLUS("m17Plus");

    public final String value;

    private VideoAgeGatingVideoGameRatingEnum(String value) {
        this.value = value;
    }
}
