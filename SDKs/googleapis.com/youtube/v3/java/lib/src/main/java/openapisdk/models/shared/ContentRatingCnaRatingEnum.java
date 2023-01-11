package openapisdk.models.shared;


public enum ContentRatingCnaRatingEnum {
    CNA_UNSPECIFIED("cnaUnspecified"),
    CNA_AP("cnaAp"),
    CNA12("cna12"),
    CNA15("cna15"),
    CNA18("cna18"),
    CNA18PLUS("cna18plus"),
    CNA_UNRATED("cnaUnrated");

    public final String value;

    private ContentRatingCnaRatingEnum(String value) {
        this.value = value;
    }
}
