package openapisdk.models.shared;


public enum OutputScaleToEnum {
    PREVIEW("preview"),
    MOBILE("mobile"),
    SD("sd"),
    HD("hd"),
    ONE_THOUSAND_AND_EIGHTY("1080");

    public final String value;

    private OutputScaleToEnum(String value) {
        this.value = value;
    }
}
