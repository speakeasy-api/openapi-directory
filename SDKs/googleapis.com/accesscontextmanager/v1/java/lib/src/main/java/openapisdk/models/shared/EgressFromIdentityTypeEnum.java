package openapisdk.models.shared;


public enum EgressFromIdentityTypeEnum {
    IDENTITY_TYPE_UNSPECIFIED("IDENTITY_TYPE_UNSPECIFIED"),
    ANY_IDENTITY("ANY_IDENTITY"),
    ANY_USER_ACCOUNT("ANY_USER_ACCOUNT"),
    ANY_SERVICE_ACCOUNT("ANY_SERVICE_ACCOUNT");

    public final String value;

    private EgressFromIdentityTypeEnum(String value) {
        this.value = value;
    }
}
