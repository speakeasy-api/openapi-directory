package openapisdk.models.shared;


public enum EndpointNetworkTypeEnum {
    NETWORK_TYPE_UNSPECIFIED("NETWORK_TYPE_UNSPECIFIED"),
    GCP_NETWORK("GCP_NETWORK"),
    NON_GCP_NETWORK("NON_GCP_NETWORK");

    public final String value;

    private EndpointNetworkTypeEnum(String value) {
        this.value = value;
    }
}
