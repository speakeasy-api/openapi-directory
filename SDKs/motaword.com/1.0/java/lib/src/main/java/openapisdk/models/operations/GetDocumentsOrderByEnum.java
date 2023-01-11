package openapisdk.models.operations;


public enum GetDocumentsOrderByEnum {
    ID("id"),
    UPDATED_AT("updated_at"),
    CREATED_AT("created_at"),
    NAME("name");

    public final String value;

    private GetDocumentsOrderByEnum(String value) {
        this.value = value;
    }
}
