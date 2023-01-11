package openapisdk.models.shared;


public enum GoogleFirestoreAdminV1beta2IndexStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    READY("READY"),
    NEEDS_REPAIR("NEEDS_REPAIR");

    public final String value;

    private GoogleFirestoreAdminV1beta2IndexStateEnum(String value) {
        this.value = value;
    }
}
