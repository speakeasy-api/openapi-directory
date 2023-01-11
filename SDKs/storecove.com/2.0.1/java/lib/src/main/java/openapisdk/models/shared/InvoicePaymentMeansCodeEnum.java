package openapisdk.models.shared;


public enum InvoicePaymentMeansCodeEnum {
    ONLINE_PAYMENT_SERVICE("online_payment_service"),
    BANK_CARD("bank_card"),
    DIRECT_DEBIT("direct_debit"),
    STANDING_AGREEMENT("standing_agreement"),
    CREDIT_TRANSFER("credit_transfer"),
    SE_BANKGIRO("se_bankgiro"),
    SE_PLUSGIRO("se_plusgiro"),
    AUNZ_NPP("aunz_npp"),
    UNKNOWN(""),
    ONE("1"),
    THIRTY("30"),
    THIRTY_ONE("31"),
    FORTY_TWO("42"),
    FORTY_EIGHT("48"),
    FORTY_NINE("49"),
    FIFTY_SEVEN("57"),
    FIFTY_EIGHT("58");

    public final String value;

    private InvoicePaymentMeansCodeEnum(String value) {
        this.value = value;
    }
}
