package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lat")
    public Double lat;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation withLat(Double lat) {
        this.lat = lat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lon")
    public Double lon;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation withLon(Double lon) {
        this.lon = lon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postal_code")
    public String postalCode;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
}