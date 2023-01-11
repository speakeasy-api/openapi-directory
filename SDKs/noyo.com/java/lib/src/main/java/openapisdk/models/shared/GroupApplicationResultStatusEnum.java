package openapisdk.models.shared;


public enum GroupApplicationResultStatusEnum {
    ACTION_REQUIRED("action_required"),
    CANCELED("canceled"),
    IN_PROGRESS("in_progress"),
    INSTALLED_AT_CARRIER("installed_at_carrier"),
    NOYO_REVIEW("noyo_review"),
    READY_FOR_REQUESTS("ready_for_requests"),
    UNABLE_TO_INSTALL("unable_to_install"),
    WAITING_ON_CARRIER("waiting_on_carrier");

    public final String value;

    private GroupApplicationResultStatusEnum(String value) {
        this.value = value;
    }
}
