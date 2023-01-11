package openapisdk.models.operations;


public enum GetUserDocumentsOrderByEnum {
    ID("id"),
    UPDATED_AT("updated_at"),
    CREATED_AT("created_at"),
    NAME("name");

    public final String value;

    private GetUserDocumentsOrderByEnum(String value) {
        this.value = value;
    }
}
