package openapisdk.models.shared;


public enum ProfileMetadataUserTypesEnum {
    USER_TYPE_UNKNOWN("USER_TYPE_UNKNOWN"),
    GOOGLE_USER("GOOGLE_USER"),
    GPLUS_USER("GPLUS_USER"),
    GOOGLE_APPS_USER("GOOGLE_APPS_USER");

    public final String value;

    private ProfileMetadataUserTypesEnum(String value) {
        this.value = value;
    }
}
