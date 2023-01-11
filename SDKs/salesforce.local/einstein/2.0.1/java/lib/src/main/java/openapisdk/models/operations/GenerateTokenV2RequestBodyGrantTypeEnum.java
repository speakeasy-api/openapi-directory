package openapisdk.models.operations;


public enum GenerateTokenV2RequestBodyGrantTypeEnum {
    URN_IETF_PARAMS_OAUTH_GRANT_TYPE_JWT_BEARER("urn:ietf:params:oauth:grant-type:jwt-bearer"),
    REFRESH_TOKEN("refresh_token");

    public final String value;

    private GenerateTokenV2RequestBodyGrantTypeEnum(String value) {
        this.value = value;
    }
}
