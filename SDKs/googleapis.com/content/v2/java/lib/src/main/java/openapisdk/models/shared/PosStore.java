package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PosStore
 * Store resource.
**/
public class PosStore {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcidCategory")
    public String[] gcidCategory;
    public PosStore withGcidCategory(String[] gcidCategory) {
        this.gcidCategory = gcidCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PosStore withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public PosStore withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placeId")
    public String placeId;
    public PosStore withPlaceId(String placeId) {
        this.placeId = placeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storeAddress")
    public String storeAddress;
    public PosStore withStoreAddress(String storeAddress) {
        this.storeAddress = storeAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storeCode")
    public String storeCode;
    public PosStore withStoreCode(String storeCode) {
        this.storeCode = storeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storeName")
    public String storeName;
    public PosStore withStoreName(String storeName) {
        this.storeName = storeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("websiteUrl")
    public String websiteUrl;
    public PosStore withWebsiteUrl(String websiteUrl) {
        this.websiteUrl = websiteUrl;
        return this;
    }
}