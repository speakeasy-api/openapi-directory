package openapisdk.models.shared;


public enum FindingStateEnum {
    NOTFIXED("notfixed"),
    INVALID("invalid"),
    ACCEPTED("accepted"),
    FIXED("fixed");

    public final String value;

    private FindingStateEnum(String value) {
        this.value = value;
    }
}
