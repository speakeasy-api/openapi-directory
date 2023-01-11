package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class V3Disruption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colour")
    public String colour;
    public V3Disruption withColour(String colour) {
        this.colour = colour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public V3Disruption withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_on_board")
    public Boolean displayOnBoard;
    public V3Disruption withDisplayOnBoard(Boolean displayOnBoard) {
        this.displayOnBoard = displayOnBoard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_status")
    public Boolean displayStatus;
    public V3Disruption withDisplayStatus(Boolean displayStatus) {
        this.displayStatus = displayStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disruption_id")
    public Long disruptionId;
    public V3Disruption withDisruptionId(Long disruptionId) {
        this.disruptionId = disruptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disruption_status")
    public String disruptionStatus;
    public V3Disruption withDisruptionStatus(String disruptionStatus) {
        this.disruptionStatus = disruptionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disruption_type")
    public String disruptionType;
    public V3Disruption withDisruptionType(String disruptionType) {
        this.disruptionType = disruptionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("from_date")
    public OffsetDateTime fromDate;
    public V3Disruption withFromDate(OffsetDateTime fromDate) {
        this.fromDate = fromDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_updated")
    public OffsetDateTime lastUpdated;
    public V3Disruption withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("published_on")
    public OffsetDateTime publishedOn;
    public V3Disruption withPublishedOn(OffsetDateTime publishedOn) {
        this.publishedOn = publishedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routes")
    public V3DisruptionRoute[] routes;
    public V3Disruption withRoutes(V3DisruptionRoute[] routes) {
        this.routes = routes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stops")
    public V3DisruptionStop[] stops;
    public V3Disruption withStops(V3DisruptionStop[] stops) {
        this.stops = stops;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public V3Disruption withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("to_date")
    public OffsetDateTime toDate;
    public V3Disruption withToDate(OffsetDateTime toDate) {
        this.toDate = toDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public V3Disruption withUrl(String url) {
        this.url = url;
        return this;
    }
}