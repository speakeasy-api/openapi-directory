package openapisdk.models.shared;


public enum ContentRatingCncRatingEnum {
    CNC_UNSPECIFIED("cncUnspecified"),
    CNC_T("cncT"),
    CNC10("cnc10"),
    CNC12("cnc12"),
    CNC16("cnc16"),
    CNC18("cnc18"),
    CNC_E("cncE"),
    CNC_INTERDICTION("cncInterdiction"),
    CNC_UNRATED("cncUnrated");

    public final String value;

    private ContentRatingCncRatingEnum(String value) {
        this.value = value;
    }
}
