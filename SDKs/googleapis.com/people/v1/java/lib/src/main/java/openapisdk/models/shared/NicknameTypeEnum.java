package openapisdk.models.shared;


public enum NicknameTypeEnum {
    DEFAULT_("DEFAULT"),
    MAIDEN_NAME("MAIDEN_NAME"),
    INITIALS("INITIALS"),
    GPLUS("GPLUS"),
    OTHER_NAME("OTHER_NAME"),
    ALTERNATE_NAME("ALTERNATE_NAME"),
    SHORT_NAME("SHORT_NAME");

    public final String value;

    private NicknameTypeEnum(String value) {
        this.value = value;
    }
}
