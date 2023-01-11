package openapisdk.models.shared;


public enum ScaStatusEnum {
    RECEIVED("received"),
    PSU_IDENTIFIED("psuIdentified"),
    PSU_AUTHENTICATED("psuAuthenticated"),
    SCA_METHOD_SELECTED("scaMethodSelected"),
    STARTED("started"),
    UNCONFIRMED("unconfirmed"),
    FINALISED("finalised"),
    FAILED("failed"),
    EXEMPTED("exempted");

    public final String value;

    private ScaStatusEnum(String value) {
        this.value = value;
    }
}
