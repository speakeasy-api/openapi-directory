package openapisdk.models.operations;


public enum EditAlbumRequestBodyPrivacyEnum {
    ANYBODY("anybody"),
    EMBED_ONLY("embed_only"),
    PASSWORD("password");

    public final String value;

    private EditAlbumRequestBodyPrivacyEnum(String value) {
        this.value = value;
    }
}
