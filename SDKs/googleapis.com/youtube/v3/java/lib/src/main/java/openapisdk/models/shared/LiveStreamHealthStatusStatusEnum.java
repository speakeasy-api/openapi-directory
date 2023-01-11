package openapisdk.models.shared;


public enum LiveStreamHealthStatusStatusEnum {
    GOOD("good"),
    OK("ok"),
    BAD("bad"),
    NO_DATA("noData"),
    REVOKED("revoked");

    public final String value;

    private LiveStreamHealthStatusStatusEnum(String value) {
        this.value = value;
    }
}
