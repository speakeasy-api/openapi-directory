package openapisdk.models.shared;


public enum ActivitySnippetTypeEnum {
    TYPE_UNSPECIFIED("typeUnspecified"),
    UPLOAD("upload"),
    LIKE("like"),
    FAVORITE("favorite"),
    COMMENT("comment"),
    SUBSCRIPTION("subscription"),
    PLAYLIST_ITEM("playlistItem"),
    RECOMMENDATION("recommendation"),
    BULLETIN("bulletin"),
    SOCIAL("social"),
    CHANNEL_ITEM("channelItem"),
    PROMOTED_ITEM("promotedItem");

    public final String value;

    private ActivitySnippetTypeEnum(String value) {
        this.value = value;
    }
}
