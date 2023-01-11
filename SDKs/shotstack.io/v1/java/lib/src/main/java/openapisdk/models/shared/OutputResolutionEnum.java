package openapisdk.models.shared;


public enum OutputResolutionEnum {
    PREVIEW("preview"),
    MOBILE("mobile"),
    SD("sd"),
    HD("hd"),
    ONE_THOUSAND_AND_EIGHTY("1080");

    public final String value;

    private OutputResolutionEnum(String value) {
        this.value = value;
    }
}
