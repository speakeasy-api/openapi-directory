package openapisdk.models.shared;


public enum MembershipStateCodeEnum {
    CODE_UNSPECIFIED("CODE_UNSPECIFIED"),
    CREATING("CREATING"),
    READY("READY"),
    DELETING("DELETING"),
    UPDATING("UPDATING"),
    SERVICE_UPDATING("SERVICE_UPDATING");

    public final String value;

    private MembershipStateCodeEnum(String value) {
        this.value = value;
    }
}
