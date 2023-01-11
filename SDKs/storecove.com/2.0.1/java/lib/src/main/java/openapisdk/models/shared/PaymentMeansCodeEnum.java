package openapisdk.models.shared;


public enum PaymentMeansCodeEnum {
    CREDIT_TRANSFER("credit_transfer"),
    DIRECT_DEBIT("direct_debit"),
    BANK_CARD("bank_card"),
    CREDIT_CARD("credit_card"),
    ONLINE_PAYMENT_SERVICE("online_payment_service"),
    STANDING_AGREEMENT("standing_agreement"),
    AUNZ_NPP("aunz_npp"),
    AUNZ_NPP_PAYID("aunz_npp_payid"),
    AUNZ_NPP_PAYTO("aunz_npp_payto"),
    AUNZ_BPAY("aunz_bpay"),
    AUNZ_POSTBILLPAY("aunz_postbillpay"),
    AUNZ_URI("aunz_uri"),
    SE_BANKGIRO("se_bankgiro"),
    SE_PLUSGIRO("se_plusgiro"),
    SG_GIRO("sg_giro"),
    SG_CARD("sg_card"),
    SG_PAYNOW("sg_paynow");

    public final String value;

    private PaymentMeansCodeEnum(String value) {
        this.value = value;
    }
}
