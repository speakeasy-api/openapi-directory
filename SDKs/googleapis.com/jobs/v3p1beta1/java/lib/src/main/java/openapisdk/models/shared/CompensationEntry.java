package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompensationEntry
 * A compensation entry that represents one component of compensation, such as base pay, bonus, or other compensation type. Annualization: One compensation entry can be annualized if - it contains valid amount or range. - and its expected_units_per_year is set or can be derived. Its annualized range is determined as (amount or range) times expected_units_per_year.
**/
public class CompensationEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Money amount;
    public CompensationEntry withAmount(Money amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CompensationEntry withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expectedUnitsPerYear")
    public Double expectedUnitsPerYear;
    public CompensationEntry withExpectedUnitsPerYear(Double expectedUnitsPerYear) {
        this.expectedUnitsPerYear = expectedUnitsPerYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public CompensationRange range;
    public CompensationEntry withRange(CompensationRange range) {
        this.range = range;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CompensationEntryTypeEnum type;
    public CompensationEntry withType(CompensationEntryTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public CompensationEntryUnitEnum unit;
    public CompensationEntry withUnit(CompensationEntryUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}