package openapisdk.models.operations;


public enum CreateOrganizationAdminRequestBodyAuthenticationMethodEnum {
    EMAIL("Email"),
    CISCO_SECURE_X_SIGN_ON("Cisco SecureX Sign-On");

    public final String value;

    private CreateOrganizationAdminRequestBodyAuthenticationMethodEnum(String value) {
        this.value = value;
    }
}
