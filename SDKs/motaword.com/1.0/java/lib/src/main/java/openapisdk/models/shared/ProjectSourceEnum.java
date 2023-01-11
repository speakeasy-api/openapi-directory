package openapisdk.models.shared;


public enum ProjectSourceEnum {
    API("api"),
    WEB("web");

    public final String value;

    private ProjectSourceEnum(String value) {
        this.value = value;
    }
}
