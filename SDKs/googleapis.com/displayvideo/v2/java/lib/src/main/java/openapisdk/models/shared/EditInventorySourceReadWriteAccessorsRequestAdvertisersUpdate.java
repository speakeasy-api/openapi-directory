package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate
 * Update to the list of advertisers with read/write access to the inventory source.
**/
public class EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addedAdvertisers")
    public String[] addedAdvertisers;
    public EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate withAddedAdvertisers(String[] addedAdvertisers) {
        this.addedAdvertisers = addedAdvertisers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removedAdvertisers")
    public String[] removedAdvertisers;
    public EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate withRemovedAdvertisers(String[] removedAdvertisers) {
        this.removedAdvertisers = removedAdvertisers;
        return this;
    }
}