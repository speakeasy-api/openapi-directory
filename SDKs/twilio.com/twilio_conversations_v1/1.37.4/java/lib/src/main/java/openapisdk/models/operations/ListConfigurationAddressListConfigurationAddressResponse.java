package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConfigurationAddressListConfigurationAddressResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_configurations")
    public openapisdk.models.shared.ConversationsV1ConfigurationAddress[] addressConfigurations;
    public ListConfigurationAddressListConfigurationAddressResponse withAddressConfigurations(openapisdk.models.shared.ConversationsV1ConfigurationAddress[] addressConfigurations) {
        this.addressConfigurations = addressConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListConfigurationAddressListConfigurationAddressResponseMeta meta;
    public ListConfigurationAddressListConfigurationAddressResponse withMeta(ListConfigurationAddressListConfigurationAddressResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}