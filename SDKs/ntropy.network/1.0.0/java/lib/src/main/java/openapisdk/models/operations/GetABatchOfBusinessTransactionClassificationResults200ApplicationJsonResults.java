package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public String[] labels;
    public GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults withLabels(String[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logo")
    public String logo;
    public GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults withLogo(String logo) {
        this.logo = logo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchant")
    public String merchant;
    public GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults withMerchant(String merchant) {
        this.merchant = merchant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transaction_id")
    public String transactionId;
    public GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults withWebsite(String website) {
        this.website = website;
        return this;
    }
}