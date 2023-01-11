package openapisdk.models.shared;


public enum GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum {
    PAYMENT_PLAN_UNSPECIFIED("PAYMENT_PLAN_UNSPECIFIED"),
    COMMITMENT("COMMITMENT"),
    FLEXIBLE("FLEXIBLE"),
    FREE("FREE"),
    TRIAL("TRIAL"),
    OFFLINE("OFFLINE");

    public final String value;

    private GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum(String value) {
        this.value = value;
    }
}
