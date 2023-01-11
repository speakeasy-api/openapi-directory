package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeliveryLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public Address address;
    public DeliveryLocation withAddress(Address address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DeliveryLocation withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemeAgencyId")
    public String schemeAgencyId;
    public DeliveryLocation withSchemeAgencyId(String schemeAgencyId) {
        this.schemeAgencyId = schemeAgencyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemeId")
    public String schemeId;
    public DeliveryLocation withSchemeId(String schemeId) {
        this.schemeId = schemeId;
        return this;
    }
}