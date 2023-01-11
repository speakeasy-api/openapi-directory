package openapisdk.models.shared;


public enum PatientSmsNotifcationResponseStatusEnum {
    ACKNOWLEDGED("ACKNOWLEDGED"),
    ERRORED("ERRORED");

    public final String value;

    private PatientSmsNotifcationResponseStatusEnum(String value) {
        this.value = value;
    }
}
