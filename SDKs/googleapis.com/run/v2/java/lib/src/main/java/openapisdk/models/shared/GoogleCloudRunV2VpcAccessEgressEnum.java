package openapisdk.models.shared;


public enum GoogleCloudRunV2VpcAccessEgressEnum {
    VPC_EGRESS_UNSPECIFIED("VPC_EGRESS_UNSPECIFIED"),
    ALL_TRAFFIC("ALL_TRAFFIC"),
    PRIVATE_RANGES_ONLY("PRIVATE_RANGES_ONLY");

    public final String value;

    private GoogleCloudRunV2VpcAccessEgressEnum(String value) {
        this.value = value;
    }
}
