package openapisdk.models.shared;



public class ApkListingsListResponse {
    public String kind;
    public ApkListingsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    public ApkListing[] listings;
    public ApkListingsListResponse withListings(ApkListing[] listings) {
        this.listings = listings;
        return this;
    }
}