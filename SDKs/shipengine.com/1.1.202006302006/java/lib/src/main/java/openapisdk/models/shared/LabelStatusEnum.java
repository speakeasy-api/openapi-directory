package openapisdk.models.shared;


public enum LabelStatusEnum {
    PROCESSING("processing"),
    COMPLETED("completed"),
    ERROR("error"),
    VOIDED("voided");

    public final String value;

    private LabelStatusEnum(String value) {
        this.value = value;
    }
}
