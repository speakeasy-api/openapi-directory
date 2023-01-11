package openapisdk.models.shared;


public enum DiscoverableParticipantDocumentTypesEnum {
    INVOICE("invoice"),
    CREDITNOTE("creditnote"),
    INVOICE_RESPONSE("invoice_response"),
    ORDER("order"),
    ORDER_RESPONSE("order_response"),
    DESPATCH_NOTIFICATION("despatch_notification"),
    PRODUCT_CATALOGUE("product_catalogue");

    public final String value;

    private DiscoverableParticipantDocumentTypesEnum(String value) {
        this.value = value;
    }
}
