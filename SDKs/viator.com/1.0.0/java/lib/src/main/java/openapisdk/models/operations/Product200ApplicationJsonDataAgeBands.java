package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Product200ApplicationJsonDataAgeBands {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adult")
    public Boolean adult;
    public Product200ApplicationJsonDataAgeBands withAdult(Boolean adult) {
        this.adult = adult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageFrom")
    public Long ageFrom;
    public Product200ApplicationJsonDataAgeBands withAgeFrom(Long ageFrom) {
        this.ageFrom = ageFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageTo")
    public Long ageTo;
    public Product200ApplicationJsonDataAgeBands withAgeTo(Long ageTo) {
        this.ageTo = ageTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandId")
    public Long bandId;
    public Product200ApplicationJsonDataAgeBands withBandId(Long bandId) {
        this.bandId = bandId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public Product200ApplicationJsonDataAgeBands withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Product200ApplicationJsonDataAgeBands withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pluralDescription")
    public String pluralDescription;
    public Product200ApplicationJsonDataAgeBands withPluralDescription(String pluralDescription) {
        this.pluralDescription = pluralDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public Product200ApplicationJsonDataAgeBands withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treatAsAdult")
    public Boolean treatAsAdult;
    public Product200ApplicationJsonDataAgeBands withTreatAsAdult(Boolean treatAsAdult) {
        this.treatAsAdult = treatAsAdult;
        return this;
    }
}