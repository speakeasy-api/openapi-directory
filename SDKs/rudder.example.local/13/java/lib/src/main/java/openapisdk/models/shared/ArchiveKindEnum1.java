package openapisdk.models.shared;


public enum ArchiveKindEnum1 {
    LATEST_ARCHIVE("latestArchive"),
    LATEST_COMMIT("latestCommit"),
    ARCHIVE_ID("archive ID");

    public final String value;

    private ArchiveKindEnum1(String value) {
        this.value = value;
    }
}
