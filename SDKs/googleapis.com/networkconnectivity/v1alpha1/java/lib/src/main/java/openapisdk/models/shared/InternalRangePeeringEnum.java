package openapisdk.models.shared;


public enum InternalRangePeeringEnum {
    PEERING_UNSPECIFIED("PEERING_UNSPECIFIED"),
    FOR_SELF("FOR_SELF"),
    FOR_PEER("FOR_PEER"),
    NOT_SHARED("NOT_SHARED");

    public final String value;

    private InternalRangePeeringEnum(String value) {
        this.value = value;
    }
}
