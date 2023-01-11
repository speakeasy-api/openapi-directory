package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MinimumOrderValueTable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storeCodeSetWithMovs")
    public MinimumOrderValueTableStoreCodeSetWithMov[] storeCodeSetWithMovs;
    public MinimumOrderValueTable withStoreCodeSetWithMovs(MinimumOrderValueTableStoreCodeSetWithMov[] storeCodeSetWithMovs) {
        this.storeCodeSetWithMovs = storeCodeSetWithMovs;
        return this;
    }
}