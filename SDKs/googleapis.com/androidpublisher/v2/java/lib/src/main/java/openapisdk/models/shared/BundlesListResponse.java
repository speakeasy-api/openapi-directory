package openapisdk.models.shared;



public class BundlesListResponse {
    public Bundle[] bundles;
    public BundlesListResponse withBundles(Bundle[] bundles) {
        this.bundles = bundles;
        return this;
    }
    public String kind;
    public BundlesListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}