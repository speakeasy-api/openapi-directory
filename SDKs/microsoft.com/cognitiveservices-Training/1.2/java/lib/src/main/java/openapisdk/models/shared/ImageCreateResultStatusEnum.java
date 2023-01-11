package openapisdk.models.shared;


public enum ImageCreateResultStatusEnum {
    OK("OK"),
    OK_DUPLICATE("OKDuplicate"),
    ERROR_SOURCE("ErrorSource"),
    ERROR_IMAGE_FORMAT("ErrorImageFormat"),
    ERROR_IMAGE_SIZE("ErrorImageSize"),
    ERROR_STORAGE("ErrorStorage"),
    ERROR_LIMIT_EXCEED("ErrorLimitExceed"),
    ERROR_TAG_LIMIT_EXCEED("ErrorTagLimitExceed"),
    ERROR_UNKNOWN("ErrorUnknown");

    public final String value;

    private ImageCreateResultStatusEnum(String value) {
        this.value = value;
    }
}
