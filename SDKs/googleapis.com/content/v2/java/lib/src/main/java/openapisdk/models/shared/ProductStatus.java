package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProductStatus
 * The status of a product, i.e., information about a product computed asynchronously.
**/
public class ProductStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationDate")
    public String creationDate;
    public ProductStatus withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataQualityIssues")
    public ProductStatusDataQualityIssue[] dataQualityIssues;
    public ProductStatus withDataQualityIssues(ProductStatusDataQualityIssue[] dataQualityIssues) {
        this.dataQualityIssues = dataQualityIssues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationStatuses")
    public ProductStatusDestinationStatus[] destinationStatuses;
    public ProductStatus withDestinationStatuses(ProductStatusDestinationStatus[] destinationStatuses) {
        this.destinationStatuses = destinationStatuses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleExpirationDate")
    public String googleExpirationDate;
    public ProductStatus withGoogleExpirationDate(String googleExpirationDate) {
        this.googleExpirationDate = googleExpirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemLevelIssues")
    public ProductStatusItemLevelIssue[] itemLevelIssues;
    public ProductStatus withItemLevelIssues(ProductStatusItemLevelIssue[] itemLevelIssues) {
        this.itemLevelIssues = itemLevelIssues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ProductStatus withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdateDate")
    public String lastUpdateDate;
    public ProductStatus withLastUpdateDate(String lastUpdateDate) {
        this.lastUpdateDate = lastUpdateDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public ProductStatus withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public Product product;
    public ProductStatus withProduct(Product product) {
        this.product = product;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public ProductStatus withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ProductStatus withTitle(String title) {
        this.title = title;
        return this;
    }
}