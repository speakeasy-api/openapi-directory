package openapisdk.models.shared;


public enum ErrorLocationTypeEnum {
    REQUEST_BODY("requestBody"),
    QUERY_PARAM("queryParam"),
    REQUEST_PARAM("requestParam"),
    HEADER("header"),
    PATH_PARAM("pathParam");

    public final String value;

    private ErrorLocationTypeEnum(String value) {
        this.value = value;
    }
}
