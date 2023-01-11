package openapisdk.models.shared;


public enum ObAddressTypeCodeEnum {
    BUSINESS("Business"),
    CORRESPONDENCE("Correspondence"),
    DELIVERY_TO("DeliveryTo"),
    MAIL_TO("MailTo"),
    PO_BOX("POBox"),
    POSTAL("Postal"),
    RESIDENTIAL("Residential"),
    STATEMENT("Statement");

    public final String value;

    private ObAddressTypeCodeEnum(String value) {
        this.value = value;
    }
}
