package openapisdk.models.operations;


public enum LaunchProjectRequestBodyPaymentMethodEnum {
    CORPORATE("corporate"),
    CLIENT("client"),
    APP("app"),
    CREDIT("credit"),
    CORPORATE_CARD("corporate_card");

    public final String value;

    private LaunchProjectRequestBodyPaymentMethodEnum(String value) {
        this.value = value;
    }
}
