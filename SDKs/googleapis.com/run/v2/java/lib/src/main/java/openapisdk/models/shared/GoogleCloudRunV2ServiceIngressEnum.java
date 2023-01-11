package openapisdk.models.shared;


public enum GoogleCloudRunV2ServiceIngressEnum {
    INGRESS_TRAFFIC_UNSPECIFIED("INGRESS_TRAFFIC_UNSPECIFIED"),
    INGRESS_TRAFFIC_ALL("INGRESS_TRAFFIC_ALL"),
    INGRESS_TRAFFIC_INTERNAL_ONLY("INGRESS_TRAFFIC_INTERNAL_ONLY"),
    INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER("INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER");

    public final String value;

    private GoogleCloudRunV2ServiceIngressEnum(String value) {
        this.value = value;
    }
}
