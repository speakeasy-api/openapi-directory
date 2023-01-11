package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MinimumOrderValueTableStoreCodeSetWithMov
 * A list of store code sets sharing the same minimum order value. At least two sets are required and the last one must be empty, which signifies 'MOV for all other stores'. Each store code can only appear once across all the sets. All prices within a service must have the same currency.
**/
public class MinimumOrderValueTableStoreCodeSetWithMov {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storeCodes")
    public String[] storeCodes;
    public MinimumOrderValueTableStoreCodeSetWithMov withStoreCodes(String[] storeCodes) {
        this.storeCodes = storeCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Price value;
    public MinimumOrderValueTableStoreCodeSetWithMov withValue(Price value) {
        this.value = value;
        return this;
    }
}