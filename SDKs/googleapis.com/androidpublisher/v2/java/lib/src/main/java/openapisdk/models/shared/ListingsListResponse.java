package openapisdk.models.shared;



public class ListingsListResponse {
    public String kind;
    public ListingsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    public Listing[] listings;
    public ListingsListResponse withListings(Listing[] listings) {
        this.listings = listings;
        return this;
    }
}