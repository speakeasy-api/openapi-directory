package openapisdk.models.operations;


public enum SearchTracksSortEnum {
    SCORE("score"),
    RANKING_ALL("ranking_all"),
    ARTIST("artist"),
    TITLE("title"),
    BPM("bpm"),
    FRESHNESS("freshness"),
    DURATION("duration");

    public final String value;

    private SearchTracksSortEnum(String value) {
        this.value = value;
    }
}
