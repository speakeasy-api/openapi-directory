package openapisdk.models.operations;


public enum HooksPostEventTypeEnum {
    ALL("all"),
    SMS_MO("sms_mo"),
    DLR("dlr"),
    VOICE_STATUS("voice_status");

    public final String value;

    private HooksPostEventTypeEnum(String value) {
        this.value = value;
    }
}
