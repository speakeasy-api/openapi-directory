package openapisdk.models.operations;


public enum CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum {
    PERFORMANCE("performance"),
    STABILITY("stability"),
    BROKE_OLD_FEATURES("broke old features"),
    UNIFYING_NETWORKS_VERSIONS("unifying networks versions"),
    TESTING("testing"),
    OTHER("other");

    public final String value;

    private CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum(String value) {
        this.value = value;
    }
}
