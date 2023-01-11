package openapisdk.models.shared;


public enum DeliverInfoTargetEnum {
    TARGET_UNSPECIFIED("TARGET_UNSPECIFIED"),
    INSTANCE("INSTANCE"),
    INTERNET("INTERNET"),
    GOOGLE_API("GOOGLE_API"),
    GKE_MASTER("GKE_MASTER"),
    CLOUD_SQL_INSTANCE("CLOUD_SQL_INSTANCE"),
    PSC_PUBLISHED_SERVICE("PSC_PUBLISHED_SERVICE"),
    PSC_GOOGLE_API("PSC_GOOGLE_API"),
    PSC_VPC_SC("PSC_VPC_SC");

    public final String value;

    private DeliverInfoTargetEnum(String value) {
        this.value = value;
    }
}
