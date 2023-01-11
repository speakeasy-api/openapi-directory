package openapisdk.models.shared;


public enum FindingInsertionPointEnum {
    COOKIE("cookie"),
    HEADER("header"),
    PARAMETER("parameter"),
    ARBITRARY_URL_PARAM_NAME("arbitrary_url_param_name"),
    URL_PATH_FOLDER("url_path_folder"),
    UNKNOWN("");

    public final String value;

    private FindingInsertionPointEnum(String value) {
        this.value = value;
    }
}
