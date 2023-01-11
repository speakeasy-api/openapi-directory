package openapisdk.models.shared;


public enum DocTypeEnum {
    BASIC("basic"),
    ERROR("error"),
    LINK("link");

    public final String value;

    private DocTypeEnum(String value) {
        this.value = value;
    }
}
