package openapisdk.models.shared;


public enum DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum {
    FRAUD_UNSPECIFIED("FRAUD_UNSPECIFIED"),
    AD_IMPRESSION_FRAUD100("AD_IMPRESSION_FRAUD_100"),
    AD_IMPRESSION_FRAUD50("AD_IMPRESSION_FRAUD_50"),
    AD_IMPRESSION_FRAUD25("AD_IMPRESSION_FRAUD_25"),
    AD_IMPRESSION_FRAUD10("AD_IMPRESSION_FRAUD_10"),
    AD_IMPRESSION_FRAUD8("AD_IMPRESSION_FRAUD_8"),
    AD_IMPRESSION_FRAUD6("AD_IMPRESSION_FRAUD_6"),
    AD_IMPRESSION_FRAUD4("AD_IMPRESSION_FRAUD_4"),
    AD_IMPRESSION_FRAUD2("AD_IMPRESSION_FRAUD_2");

    public final String value;

    private DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum(String value) {
        this.value = value;
    }
}
