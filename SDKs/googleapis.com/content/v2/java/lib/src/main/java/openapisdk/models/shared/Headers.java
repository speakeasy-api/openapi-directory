package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Headers
 * A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `numItems`, `postalCodeGroupNames`, or `location` must be set.
**/
public class Headers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locations")
    public LocationIdSet[] locations;
    public Headers withLocations(LocationIdSet[] locations) {
        this.locations = locations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfItems")
    public String[] numberOfItems;
    public Headers withNumberOfItems(String[] numberOfItems) {
        this.numberOfItems = numberOfItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCodeGroupNames")
    public String[] postalCodeGroupNames;
    public Headers withPostalCodeGroupNames(String[] postalCodeGroupNames) {
        this.postalCodeGroupNames = postalCodeGroupNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prices")
    public Price[] prices;
    public Headers withPrices(Price[] prices) {
        this.prices = prices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weights")
    public Weight[] weights;
    public Headers withWeights(Weight[] weights) {
        this.weights = weights;
        return this;
    }
}