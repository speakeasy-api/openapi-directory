package openapisdk.models.operations;


public enum CreateAlbumRequestBodyPrivacyEnum {
    ANYBODY("anybody"),
    EMBED_ONLY("embed_only"),
    PASSWORD("password");

    public final String value;

    private CreateAlbumRequestBodyPrivacyEnum(String value) {
        this.value = value;
    }
}
