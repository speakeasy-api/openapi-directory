package openapisdk.models.shared;


public enum ConsumerInfoTypeEnum {
    CONSUMER_TYPE_UNSPECIFIED("CONSUMER_TYPE_UNSPECIFIED"),
    PROJECT("PROJECT"),
    FOLDER("FOLDER"),
    ORGANIZATION("ORGANIZATION"),
    SERVICE_SPECIFIC("SERVICE_SPECIFIC");

    public final String value;

    private ConsumerInfoTypeEnum(String value) {
        this.value = value;
    }
}
