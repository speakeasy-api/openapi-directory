package openapisdk.models.shared;


public enum ConferenceEnumStatusEnum {
    INIT("init"),
    IN_PROGRESS("in-progress"),
    COMPLETED("completed");

    public final String value;

    private ConferenceEnumStatusEnum(String value) {
        this.value = value;
    }
}
