package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PublisherProvidedForecast
 * This message carries publisher provided forecasting information.
**/
public class PublisherProvidedForecast {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public Dimension[] dimensions;
    public PublisherProvidedForecast withDimensions(Dimension[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weeklyImpressions")
    public String weeklyImpressions;
    public PublisherProvidedForecast withWeeklyImpressions(String weeklyImpressions) {
        this.weeklyImpressions = weeklyImpressions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weeklyUniques")
    public String weeklyUniques;
    public PublisherProvidedForecast withWeeklyUniques(String weeklyUniques) {
        this.weeklyUniques = weeklyUniques;
        return this;
    }
}