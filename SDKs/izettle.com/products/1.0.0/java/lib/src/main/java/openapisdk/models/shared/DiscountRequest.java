package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DiscountRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Price amount;
    public DiscountRequest withAmount(Price amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DiscountRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalReference")
    public String externalReference;
    public DiscountRequest withExternalReference(String externalReference) {
        this.externalReference = externalReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageLookupKeys")
    public String[] imageLookupKeys;
    public DiscountRequest withImageLookupKeys(String[] imageLookupKeys) {
        this.imageLookupKeys = imageLookupKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DiscountRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentage")
    public Double percentage;
    public DiscountRequest withPercentage(Double percentage) {
        this.percentage = percentage;
        return this;
    }
    @JsonProperty("uuid")
    public String uuid;
    public DiscountRequest withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}