package openapisdk.models.operations;


public enum GetProjectsOrderByEnum {
    ID("id"),
    STATUS("status"),
    DELIVERY("delivery"),
    PRICE("price");

    public final String value;

    private GetProjectsOrderByEnum(String value) {
        this.value = value;
    }
}
