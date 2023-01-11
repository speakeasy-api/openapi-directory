package openapisdk.models.shared;


public enum LoadBalancerInfoBackendTypeEnum {
    BACKEND_TYPE_UNSPECIFIED("BACKEND_TYPE_UNSPECIFIED"),
    BACKEND_SERVICE("BACKEND_SERVICE"),
    TARGET_POOL("TARGET_POOL"),
    TARGET_INSTANCE("TARGET_INSTANCE");

    public final String value;

    private LoadBalancerInfoBackendTypeEnum(String value) {
        this.value = value;
    }
}
