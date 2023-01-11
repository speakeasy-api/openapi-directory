package openapisdk.models.shared;


public enum ResendTokenRequestTokenTypeEnum {
    INVITE_MFA_USER("INVITE_MFA_USER"),
    MFA_REGISTRATION("MFA_REGISTRATION");

    public final String value;

    private ResendTokenRequestTokenTypeEnum(String value) {
        this.value = value;
    }
}
