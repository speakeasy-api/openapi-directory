package openapisdk.models.shared;


public enum NetworkSettingsIngressTrafficAllowedEnum {
    INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED("INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED"),
    INGRESS_TRAFFIC_ALLOWED_ALL("INGRESS_TRAFFIC_ALLOWED_ALL"),
    INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY("INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY"),
    INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB("INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB");

    public final String value;

    private NetworkSettingsIngressTrafficAllowedEnum(String value) {
        this.value = value;
    }
}
