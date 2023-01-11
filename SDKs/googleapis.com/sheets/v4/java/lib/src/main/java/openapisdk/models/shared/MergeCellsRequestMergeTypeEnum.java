package openapisdk.models.shared;


public enum MergeCellsRequestMergeTypeEnum {
    MERGE_ALL("MERGE_ALL"),
    MERGE_COLUMNS("MERGE_COLUMNS"),
    MERGE_ROWS("MERGE_ROWS");

    public final String value;

    private MergeCellsRequestMergeTypeEnum(String value) {
        this.value = value;
    }
}
