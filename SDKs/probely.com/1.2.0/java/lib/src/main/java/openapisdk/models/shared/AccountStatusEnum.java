package openapisdk.models.shared;


public enum AccountStatusEnum {
    ACTIVE("active"),
    TRIAL_ENDED("trial_ended"),
    CANCELED("canceled");

    public final String value;

    private AccountStatusEnum(String value) {
        this.value = value;
    }
}
