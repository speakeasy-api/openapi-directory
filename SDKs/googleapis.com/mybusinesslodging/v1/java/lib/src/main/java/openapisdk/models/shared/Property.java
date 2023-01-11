package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Property
 * General factual information about the property's physical structure and important dates.
**/
public class Property {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("builtYear")
    public Integer builtYear;
    public Property withBuiltYear(Integer builtYear) {
        this.builtYear = builtYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("builtYearException")
    public PropertyBuiltYearExceptionEnum builtYearException;
    public Property withBuiltYearException(PropertyBuiltYearExceptionEnum builtYearException) {
        this.builtYearException = builtYearException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floorsCount")
    public Integer floorsCount;
    public Property withFloorsCount(Integer floorsCount) {
        this.floorsCount = floorsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floorsCountException")
    public PropertyFloorsCountExceptionEnum floorsCountException;
    public Property withFloorsCountException(PropertyFloorsCountExceptionEnum floorsCountException) {
        this.floorsCountException = floorsCountException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastRenovatedYear")
    public Integer lastRenovatedYear;
    public Property withLastRenovatedYear(Integer lastRenovatedYear) {
        this.lastRenovatedYear = lastRenovatedYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastRenovatedYearException")
    public PropertyLastRenovatedYearExceptionEnum lastRenovatedYearException;
    public Property withLastRenovatedYearException(PropertyLastRenovatedYearExceptionEnum lastRenovatedYearException) {
        this.lastRenovatedYearException = lastRenovatedYearException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roomsCount")
    public Integer roomsCount;
    public Property withRoomsCount(Integer roomsCount) {
        this.roomsCount = roomsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roomsCountException")
    public PropertyRoomsCountExceptionEnum roomsCountException;
    public Property withRoomsCountException(PropertyRoomsCountExceptionEnum roomsCountException) {
        this.roomsCountException = roomsCountException;
        return this;
    }
}