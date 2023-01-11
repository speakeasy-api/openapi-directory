package openapisdk.models.shared;


public enum CredentialOptionsTypeEnum {
    MIRADORE_API_KEY_V1("miradore_api_key_v1"),
    AWS_ACCESS_SECRET("aws_access_secret");

    public final String value;

    private CredentialOptionsTypeEnum(String value) {
        this.value = value;
    }
}
