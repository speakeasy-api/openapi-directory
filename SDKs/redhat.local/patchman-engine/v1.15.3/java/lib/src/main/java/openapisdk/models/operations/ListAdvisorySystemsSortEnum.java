package openapisdk.models.operations;


public enum ListAdvisorySystemsSortEnum {
    ID("id"),
    DISPLAY_NAME("display_name"),
    LAST_EVALUATION("last_evaluation"),
    LAST_UPLOAD("last_upload"),
    RHSA_COUNT("rhsa_count"),
    RHBA_COUNT("rhba_count"),
    RHEA_COUNT("rhea_count"),
    OTHER_COUNT("other_count"),
    STALE("stale");

    public final String value;

    private ListAdvisorySystemsSortEnum(String value) {
        this.value = value;
    }
}
