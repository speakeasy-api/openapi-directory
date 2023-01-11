package openapisdk.models.operations;


public enum GetOrganizationLicensesStateEnum {
    ACTIVE("active"),
    EXPIRED("expired"),
    EXPIRING("expiring"),
    UNUSED("unused"),
    UNUSED_ACTIVE("unusedActive"),
    RECENTLY_QUEUED("recentlyQueued");

    public final String value;

    private GetOrganizationLicensesStateEnum(String value) {
        this.value = value;
    }
}
