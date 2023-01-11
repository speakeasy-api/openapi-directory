package openapisdk.models.shared;


public enum CaptionSnippetStatusEnum {
    SERVING("serving"),
    SYNCING("syncing"),
    FAILED("failed");

    public final String value;

    private CaptionSnippetStatusEnum(String value) {
        this.value = value;
    }
}
