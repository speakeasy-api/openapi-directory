package openapisdk.models.operations;


public enum GetFirewallsSortEnum {
    ID("id"),
    ID_ASC("id:asc"),
    ID_DESC("id:desc"),
    NAME("name"),
    NAME_ASC("name:asc"),
    NAME_DESC("name:desc"),
    CREATED("created"),
    CREATED_ASC("created:asc"),
    CREATED_DESC("created:desc");

    public final String value;

    private GetFirewallsSortEnum(String value) {
        this.value = value;
    }
}
