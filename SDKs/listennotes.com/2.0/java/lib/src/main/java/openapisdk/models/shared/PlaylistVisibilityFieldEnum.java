package openapisdk.models.shared;


public enum PlaylistVisibilityFieldEnum {
    PUBLIC_("public"),
    UNLISTED("unlisted"),
    PRIVATE_("private");

    public final String value;

    private PlaylistVisibilityFieldEnum(String value) {
        this.value = value;
    }
}
