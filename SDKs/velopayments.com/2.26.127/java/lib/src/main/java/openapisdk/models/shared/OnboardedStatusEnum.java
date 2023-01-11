package openapisdk.models.shared;


public enum OnboardedStatusEnum {
    CREATED("CREATED"),
    INVITED("INVITED"),
    REGISTERED("REGISTERED"),
    ONBOARDED("ONBOARDED");

    public final String value;

    private OnboardedStatusEnum(String value) {
        this.value = value;
    }
}
