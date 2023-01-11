package openapisdk.models.operations;


public enum EditVideoRequestBodyPrivacyViewEnum {
    ANYBODY("anybody"),
    CONTACTS("contacts"),
    DISABLE("disable"),
    NOBODY("nobody"),
    PASSWORD("password"),
    UNLISTED("unlisted"),
    USERS("users");

    public final String value;

    private EditVideoRequestBodyPrivacyViewEnum(String value) {
        this.value = value;
    }
}
