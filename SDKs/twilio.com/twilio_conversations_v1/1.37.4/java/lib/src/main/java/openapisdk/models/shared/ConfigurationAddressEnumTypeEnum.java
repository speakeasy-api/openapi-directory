package openapisdk.models.shared;


public enum ConfigurationAddressEnumTypeEnum {
    SMS("sms"),
    WHATSAPP("whatsapp"),
    MESSENGER("messenger"),
    GBM("gbm");

    public final String value;

    private ConfigurationAddressEnumTypeEnum(String value) {
        this.value = value;
    }
}
