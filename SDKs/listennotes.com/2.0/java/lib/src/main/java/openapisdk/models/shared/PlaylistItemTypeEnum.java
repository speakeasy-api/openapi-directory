package openapisdk.models.shared;


public enum PlaylistItemTypeEnum {
    EPISODE("episode"),
    CUSTOM_AUDIO("custom_audio"),
    PODCAST("podcast");

    public final String value;

    private PlaylistItemTypeEnum(String value) {
        this.value = value;
    }
}
