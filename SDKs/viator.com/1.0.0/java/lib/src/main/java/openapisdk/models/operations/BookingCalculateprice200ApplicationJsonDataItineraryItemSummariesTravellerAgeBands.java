package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageBandId")
    public Long ageBandId;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands withAgeBandId(Long ageBandId) {
        this.ageBandId = ageBandId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pluralDescription")
    public String pluralDescription;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands withPluralDescription(String pluralDescription) {
        this.pluralDescription = pluralDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}