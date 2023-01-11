package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RedactTransaction {
    @JsonProperty("id")
    public String id;
    public RedactTransaction withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("product")
    public RedactTransactionProductEnum product;
    public RedactTransaction withProduct(RedactTransactionProductEnum product) {
        this.product = product;
        return this;
    }
    @JsonProperty("type")
    public RedactTransactionTypeEnum type;
    public RedactTransaction withType(RedactTransactionTypeEnum type) {
        this.type = type;
        return this;
    }
}