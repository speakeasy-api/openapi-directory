package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingMybookings200ApplicationJsonDataItemSummariesTravellerAgeBands {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageBandId")
    public Long ageBandId;
    public BookingMybookings200ApplicationJsonDataItemSummariesTravellerAgeBands withAgeBandId(Long ageBandId) {
        this.ageBandId = ageBandId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public BookingMybookings200ApplicationJsonDataItemSummariesTravellerAgeBands withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public BookingMybookings200ApplicationJsonDataItemSummariesTravellerAgeBands withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pluralDescription")
    public String pluralDescription;
    public BookingMybookings200ApplicationJsonDataItemSummariesTravellerAgeBands withPluralDescription(String pluralDescription) {
        this.pluralDescription = pluralDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public BookingMybookings200ApplicationJsonDataItemSummariesTravellerAgeBands withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}