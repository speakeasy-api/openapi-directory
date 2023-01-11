package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AvailableProducts200ApplicationJsonDataPas
 * **object** detailing product availability
 * - `pas` stands for Product Availability Schema
 * 
**/
public class AvailableProducts200ApplicationJsonDataPas {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incompleteQuote")
    public Boolean incompleteQuote;
    public AvailableProducts200ApplicationJsonDataPas withIncompleteQuote(Boolean incompleteQuote) {
        this.incompleteQuote = incompleteQuote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCode")
    public String productCode;
    public AvailableProducts200ApplicationJsonDataPas withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removedChildAges")
    public String[] removedChildAges;
    public AvailableProducts200ApplicationJsonDataPas withRemovedChildAges(String[] removedChildAges) {
        this.removedChildAges = removedChildAges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tourGrades")
    public java.util.Map<String, AvailableProducts200ApplicationJsonDataPasTourGrades> tourGrades;
    public AvailableProducts200ApplicationJsonDataPas withTourGrades(java.util.Map<String, AvailableProducts200ApplicationJsonDataPasTourGrades> tourGrades) {
        this.tourGrades = tourGrades;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("travellerMix")
    public String travellerMix;
    public AvailableProducts200ApplicationJsonDataPas withTravellerMix(String travellerMix) {
        this.travellerMix = travellerMix;
        return this;
    }
}