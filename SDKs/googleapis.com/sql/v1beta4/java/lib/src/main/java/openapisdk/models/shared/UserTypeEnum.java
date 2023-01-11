package openapisdk.models.shared;


public enum UserTypeEnum {
    BUILT_IN("BUILT_IN"),
    CLOUD_IAM_USER("CLOUD_IAM_USER"),
    CLOUD_IAM_SERVICE_ACCOUNT("CLOUD_IAM_SERVICE_ACCOUNT");

    public final String value;

    private UserTypeEnum(String value) {
        this.value = value;
    }
}
