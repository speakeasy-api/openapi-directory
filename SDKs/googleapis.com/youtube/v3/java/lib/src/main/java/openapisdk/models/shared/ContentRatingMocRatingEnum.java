package openapisdk.models.shared;


public enum ContentRatingMocRatingEnum {
    MOC_UNSPECIFIED("mocUnspecified"),
    MOC_E("mocE"),
    MOC_T("mocT"),
    MOC7("moc7"),
    MOC12("moc12"),
    MOC15("moc15"),
    MOC18("moc18"),
    MOC_X("mocX"),
    MOC_BANNED("mocBanned"),
    MOC_UNRATED("mocUnrated");

    public final String value;

    private ContentRatingMocRatingEnum(String value) {
        this.value = value;
    }
}
