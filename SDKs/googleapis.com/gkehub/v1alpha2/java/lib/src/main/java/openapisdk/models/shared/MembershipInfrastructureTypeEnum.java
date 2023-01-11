package openapisdk.models.shared;


public enum MembershipInfrastructureTypeEnum {
    INFRASTRUCTURE_TYPE_UNSPECIFIED("INFRASTRUCTURE_TYPE_UNSPECIFIED"),
    ON_PREM("ON_PREM"),
    MULTI_CLOUD("MULTI_CLOUD");

    public final String value;

    private MembershipInfrastructureTypeEnum(String value) {
        this.value = value;
    }
}
