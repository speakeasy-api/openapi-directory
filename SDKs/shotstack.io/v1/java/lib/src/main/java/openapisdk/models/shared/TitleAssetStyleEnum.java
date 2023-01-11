package openapisdk.models.shared;


public enum TitleAssetStyleEnum {
    MINIMAL("minimal"),
    BLOCKBUSTER("blockbuster"),
    VOGUE("vogue"),
    SKETCHY("sketchy"),
    SKINNY("skinny"),
    CHUNK("chunk"),
    CHUNK_LIGHT("chunkLight"),
    MARKER("marker"),
    FUTURE("future"),
    SUBTITLE("subtitle");

    public final String value;

    private TitleAssetStyleEnum(String value) {
        this.value = value;
    }
}
