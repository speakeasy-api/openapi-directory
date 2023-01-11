package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact")
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsContact contact;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults withContact(GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsContact contact) {
        this.contact = contact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public String[] labels;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults withLabels(String[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation location;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults withLocation(GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logo")
    public String logo;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults withLogo(String logo) {
        this.logo = logo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchant")
    public String merchant;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults withMerchant(String merchant) {
        this.merchant = merchant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("person")
    public String person;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults withPerson(String person) {
        this.person = person;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rating")
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsRating rating;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults withRating(GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsRating rating) {
        this.rating = rating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transaction_id")
    public String transactionId;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults withWebsite(String website) {
        this.website = website;
        return this;
    }
}