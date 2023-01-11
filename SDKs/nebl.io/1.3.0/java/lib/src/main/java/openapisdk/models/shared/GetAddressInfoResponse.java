package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAddressInfoResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public GetAddressInfoResponse withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utxos")
    public GetAddressInfoResponseUtxos[] utxos;
    public GetAddressInfoResponse withUtxos(GetAddressInfoResponseUtxos[] utxos) {
        this.utxos = utxos;
        return this;
    }
}