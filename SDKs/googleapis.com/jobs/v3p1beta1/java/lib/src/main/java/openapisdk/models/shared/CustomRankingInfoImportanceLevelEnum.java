package openapisdk.models.shared;


public enum CustomRankingInfoImportanceLevelEnum {
    IMPORTANCE_LEVEL_UNSPECIFIED("IMPORTANCE_LEVEL_UNSPECIFIED"),
    NONE("NONE"),
    LOW("LOW"),
    MILD("MILD"),
    MEDIUM("MEDIUM"),
    HIGH("HIGH"),
    EXTREME("EXTREME");

    public final String value;

    private CustomRankingInfoImportanceLevelEnum(String value) {
        this.value = value;
    }
}
