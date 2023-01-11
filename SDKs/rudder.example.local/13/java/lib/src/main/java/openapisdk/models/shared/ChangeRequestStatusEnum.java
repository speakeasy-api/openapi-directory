package openapisdk.models.shared;


public enum ChangeRequestStatusEnum {
    DEPLOYED("Deployed"),
    PENDING_DEPLOYMENT("Pending deployment"),
    CANCELLED("Cancelled"),
    PENDING_VALIDATION("Pending validation"),
    OPEN("Open");

    public final String value;

    private ChangeRequestStatusEnum(String value) {
        this.value = value;
    }
}
