package openapisdk.models.shared;


public enum CloudCdnWorkloadCacheFillOriginServiceEnum {
    CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED("CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED"),
    CACHE_FILL_ORIGIN_SERVICE_GOOGLE_CLOUD_STORAGE_BUCKET("CACHE_FILL_ORIGIN_SERVICE_GOOGLE_CLOUD_STORAGE_BUCKET"),
    CACHE_FILL_ORIGIN_SERVICE_BACKEND_SERVICE("CACHE_FILL_ORIGIN_SERVICE_BACKEND_SERVICE");

    public final String value;

    private CloudCdnWorkloadCacheFillOriginServiceEnum(String value) {
        this.value = value;
    }
}
