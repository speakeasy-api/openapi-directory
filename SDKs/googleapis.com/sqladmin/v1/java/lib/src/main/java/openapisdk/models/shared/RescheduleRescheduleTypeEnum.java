package openapisdk.models.shared;


public enum RescheduleRescheduleTypeEnum {
    RESCHEDULE_TYPE_UNSPECIFIED("RESCHEDULE_TYPE_UNSPECIFIED"),
    IMMEDIATE("IMMEDIATE"),
    NEXT_AVAILABLE_WINDOW("NEXT_AVAILABLE_WINDOW"),
    SPECIFIC_TIME("SPECIFIC_TIME");

    public final String value;

    private RescheduleRescheduleTypeEnum(String value) {
        this.value = value;
    }
}
