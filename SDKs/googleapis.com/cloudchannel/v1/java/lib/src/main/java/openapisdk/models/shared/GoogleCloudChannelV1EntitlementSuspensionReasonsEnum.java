package openapisdk.models.shared;


public enum GoogleCloudChannelV1EntitlementSuspensionReasonsEnum {
    SUSPENSION_REASON_UNSPECIFIED("SUSPENSION_REASON_UNSPECIFIED"),
    RESELLER_INITIATED("RESELLER_INITIATED"),
    TRIAL_ENDED("TRIAL_ENDED"),
    RENEWAL_WITH_TYPE_CANCEL("RENEWAL_WITH_TYPE_CANCEL"),
    PENDING_TOS_ACCEPTANCE("PENDING_TOS_ACCEPTANCE"),
    OTHER("OTHER");

    public final String value;

    private GoogleCloudChannelV1EntitlementSuspensionReasonsEnum(String value) {
        this.value = value;
    }
}
