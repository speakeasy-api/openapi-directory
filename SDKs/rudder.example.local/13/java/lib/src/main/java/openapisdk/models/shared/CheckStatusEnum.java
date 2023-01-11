package openapisdk.models.shared;


public enum CheckStatusEnum {
    CRITICAL("Critical"),
    WARNING("Warning"),
    OK("Ok");

    public final String value;

    private CheckStatusEnum(String value) {
        this.value = value;
    }
}
