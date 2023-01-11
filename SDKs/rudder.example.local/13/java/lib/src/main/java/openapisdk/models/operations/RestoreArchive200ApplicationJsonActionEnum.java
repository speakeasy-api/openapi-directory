package openapisdk.models.operations;


public enum RestoreArchive200ApplicationJsonActionEnum {
    RESTORE_FULL_LATEST_ARCHIVE("restoreFullLatestArchive"),
    RESTORE_GROUP_LATEST_ARCHIVE("restoreGroupLatestArchive"),
    RESTORE_RULES_LATEST_ARCHIVE("restoreRulesLatestArchive"),
    RESTORE_DIRECTIVES_LATEST_ARCHIVE("restoreDirectivesLatestArchive"),
    RESTORE_PARAMETERS_LATEST_ARCHIVE("restoreParametersLatestArchive"),
    RESTORE_FULL_LATEST_COMMIT("restoreFullLatestCommit"),
    RESTORE_GROUP_LATEST_COMMIT("restoreGroupLatestCommit"),
    RESTORE_RULES_LATEST_COMMIT("restoreRulesLatestCommit"),
    RESTORE_DIRECTIVES_LATEST_COMMIT("restoreDirectivesLatestCommit"),
    RESTORE_PARAMETERS_LATEST_COMMIT("restoreParametersLatestCommit"),
    ARCHIVE_FULL_DATE_RESTORE("archiveFullDateRestore"),
    ARCHIVE_GROUP_DATE_RESTORE("archiveGroupDateRestore"),
    ARCHIVE_RULES_DATE_RESTORE("archiveRulesDateRestore"),
    ARCHIVE_DIRECTIVES_DATE_RESTORE("archiveDirectivesDateRestore"),
    ARCHIVE_PARAMETERS_DATE_RESTORE("archiveParametersDateRestore");

    public final String value;

    private RestoreArchive200ApplicationJsonActionEnum(String value) {
        this.value = value;
    }
}
