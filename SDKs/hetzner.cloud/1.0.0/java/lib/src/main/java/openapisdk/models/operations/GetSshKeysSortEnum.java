package openapisdk.models.operations;


public enum GetSshKeysSortEnum {
    ID("id"),
    ID_ASC("id:asc"),
    ID_DESC("id:desc"),
    NAME("name"),
    NAME_ASC("name:asc"),
    NAME_DESC("name:desc");

    public final String value;

    private GetSshKeysSortEnum(String value) {
        this.value = value;
    }
}
