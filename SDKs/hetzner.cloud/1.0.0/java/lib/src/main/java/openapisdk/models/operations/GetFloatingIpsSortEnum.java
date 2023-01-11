package openapisdk.models.operations;


public enum GetFloatingIpsSortEnum {
    ID("id"),
    ID_ASC("id:asc"),
    ID_DESC("id:desc"),
    CREATED("created"),
    CREATED_ASC("created:asc"),
    CREATED_DESC("created:desc");

    public final String value;

    private GetFloatingIpsSortEnum(String value) {
        this.value = value;
    }
}
