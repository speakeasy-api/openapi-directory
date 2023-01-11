package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransferNumberRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public TransferNumberRequest withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public TransferNumberRequest withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public Double number;
    public TransferNumberRequest withNumber(Double number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public TransferNumberRequest withTo(String to) {
        this.to = to;
        return this;
    }
}