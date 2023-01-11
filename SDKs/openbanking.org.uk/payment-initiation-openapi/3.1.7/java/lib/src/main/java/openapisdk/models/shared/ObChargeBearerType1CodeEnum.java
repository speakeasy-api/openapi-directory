package openapisdk.models.shared;


public enum ObChargeBearerType1CodeEnum {
    BORNE_BY_CREDITOR("BorneByCreditor"),
    BORNE_BY_DEBTOR("BorneByDebtor"),
    FOLLOWING_SERVICE_LEVEL("FollowingServiceLevel"),
    SHARED("Shared");

    public final String value;

    private ObChargeBearerType1CodeEnum(String value) {
        this.value = value;
    }
}
