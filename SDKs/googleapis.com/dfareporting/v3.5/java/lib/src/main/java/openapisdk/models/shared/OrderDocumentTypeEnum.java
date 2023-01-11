package openapisdk.models.shared;


public enum OrderDocumentTypeEnum {
    PLANNING_ORDER_TYPE_INSERTION_ORDER("PLANNING_ORDER_TYPE_INSERTION_ORDER"),
    PLANNING_ORDER_TYPE_CHANGE_ORDER("PLANNING_ORDER_TYPE_CHANGE_ORDER");

    public final String value;

    private OrderDocumentTypeEnum(String value) {
        this.value = value;
    }
}
