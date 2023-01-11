package openapisdk.models.shared;


public enum GoogleCloudChannelV1PlanPaymentPlanEnum {
    PAYMENT_PLAN_UNSPECIFIED("PAYMENT_PLAN_UNSPECIFIED"),
    COMMITMENT("COMMITMENT"),
    FLEXIBLE("FLEXIBLE"),
    FREE("FREE"),
    TRIAL("TRIAL"),
    OFFLINE("OFFLINE");

    public final String value;

    private GoogleCloudChannelV1PlanPaymentPlanEnum(String value) {
        this.value = value;
    }
}
