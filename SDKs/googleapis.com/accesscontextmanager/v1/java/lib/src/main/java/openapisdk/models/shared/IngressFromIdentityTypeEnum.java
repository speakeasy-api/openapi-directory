package openapisdk.models.shared;


public enum IngressFromIdentityTypeEnum {
    IDENTITY_TYPE_UNSPECIFIED("IDENTITY_TYPE_UNSPECIFIED"),
    ANY_IDENTITY("ANY_IDENTITY"),
    ANY_USER_ACCOUNT("ANY_USER_ACCOUNT"),
    ANY_SERVICE_ACCOUNT("ANY_SERVICE_ACCOUNT");

    public final String value;

    private IngressFromIdentityTypeEnum(String value) {
        this.value = value;
    }
}
