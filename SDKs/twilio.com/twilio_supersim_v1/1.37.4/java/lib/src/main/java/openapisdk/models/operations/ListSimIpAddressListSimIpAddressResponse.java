package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSimIpAddressListSimIpAddressResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_addresses")
    public openapisdk.models.shared.SupersimV1SimSimIpAddress[] ipAddresses;
    public ListSimIpAddressListSimIpAddressResponse withIpAddresses(openapisdk.models.shared.SupersimV1SimSimIpAddress[] ipAddresses) {
        this.ipAddresses = ipAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSimIpAddressListSimIpAddressResponseMeta meta;
    public ListSimIpAddressListSimIpAddressResponse withMeta(ListSimIpAddressListSimIpAddressResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}