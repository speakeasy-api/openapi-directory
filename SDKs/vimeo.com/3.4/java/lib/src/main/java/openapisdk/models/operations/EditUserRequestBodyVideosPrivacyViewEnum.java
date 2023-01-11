package openapisdk.models.operations;


public enum EditUserRequestBodyVideosPrivacyViewEnum {
    ANYBODY("anybody"),
    CONTACTS("contacts"),
    DISABLE("disable"),
    NOBODY("nobody"),
    PASSWORD("password"),
    UNLISTED("unlisted"),
    USERS("users");

    public final String value;

    private EditUserRequestBodyVideosPrivacyViewEnum(String value) {
        this.value = value;
    }
}
