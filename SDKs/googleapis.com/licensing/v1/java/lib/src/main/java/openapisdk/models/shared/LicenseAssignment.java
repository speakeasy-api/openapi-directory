package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LicenseAssignment
 * Representation of a license assignment.
**/
public class LicenseAssignment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etags")
    public String etags;
    public LicenseAssignment withEtags(String etags) {
        this.etags = etags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LicenseAssignment withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public LicenseAssignment withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productName")
    public String productName;
    public LicenseAssignment withProductName(String productName) {
        this.productName = productName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public LicenseAssignment withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skuId")
    public String skuId;
    public LicenseAssignment withSkuId(String skuId) {
        this.skuId = skuId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skuName")
    public String skuName;
    public LicenseAssignment withSkuName(String skuName) {
        this.skuName = skuName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public LicenseAssignment withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}