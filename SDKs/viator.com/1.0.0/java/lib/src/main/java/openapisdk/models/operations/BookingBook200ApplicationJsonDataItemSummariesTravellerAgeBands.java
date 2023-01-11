package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageBandId")
    public Long ageBandId;
    public BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands withAgeBandId(Long ageBandId) {
        this.ageBandId = ageBandId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pluralDescription")
    public String pluralDescription;
    public BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands withPluralDescription(String pluralDescription) {
        this.pluralDescription = pluralDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}