package openapisdk.models.operations;


public enum GetVolumesIdActionsSortParameterSortEnum {
    ID("id"),
    ID_ASC("id:asc"),
    ID_DESC("id:desc"),
    COMMAND("command"),
    COMMAND_ASC("command:asc"),
    COMMAND_DESC("command:desc"),
    STATUS("status"),
    STATUS_ASC("status:asc"),
    STATUS_DESC("status:desc"),
    PROGRESS("progress"),
    PROGRESS_ASC("progress:asc"),
    PROGRESS_DESC("progress:desc"),
    STARTED("started"),
    STARTED_ASC("started:asc"),
    STARTED_DESC("started:desc"),
    FINISHED("finished"),
    FINISHED_ASC("finished:asc"),
    FINISHED_DESC("finished:desc");

    public final String value;

    private GetVolumesIdActionsSortParameterSortEnum(String value) {
        this.value = value;
    }
}
