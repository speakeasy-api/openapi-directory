package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsContact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsContact withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public String phone;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsContact withPhone(String phone) {
        this.phone = phone;
        return this;
    }
}