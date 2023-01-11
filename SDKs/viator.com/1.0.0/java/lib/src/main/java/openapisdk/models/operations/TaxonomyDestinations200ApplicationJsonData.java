package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaxonomyDestinations200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultCurrencyCode")
    public String defaultCurrencyCode;
    public TaxonomyDestinations200ApplicationJsonData withDefaultCurrencyCode(String defaultCurrencyCode) {
        this.defaultCurrencyCode = defaultCurrencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationId")
    public Long destinationId;
    public TaxonomyDestinations200ApplicationJsonData withDestinationId(Long destinationId) {
        this.destinationId = destinationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationName")
    public String destinationName;
    public TaxonomyDestinations200ApplicationJsonData withDestinationName(String destinationName) {
        this.destinationName = destinationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationType")
    public openapisdk.models.shared.DestinationTypeEnum destinationType;
    public TaxonomyDestinations200ApplicationJsonData withDestinationType(openapisdk.models.shared.DestinationTypeEnum destinationType) {
        this.destinationType = destinationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationUrlName")
    public String destinationUrlName;
    public TaxonomyDestinations200ApplicationJsonData withDestinationUrlName(String destinationUrlName) {
        this.destinationUrlName = destinationUrlName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iataCode")
    public String iataCode;
    public TaxonomyDestinations200ApplicationJsonData withIataCode(String iataCode) {
        this.iataCode = iataCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Double latitude;
    public TaxonomyDestinations200ApplicationJsonData withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Double longitude;
    public TaxonomyDestinations200ApplicationJsonData withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lookupId")
    public String lookupId;
    public TaxonomyDestinations200ApplicationJsonData withLookupId(String lookupId) {
        this.lookupId = lookupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentId")
    public Long parentId;
    public TaxonomyDestinations200ApplicationJsonData withParentId(Long parentId) {
        this.parentId = parentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectable")
    public Boolean selectable;
    public TaxonomyDestinations200ApplicationJsonData withSelectable(Boolean selectable) {
        this.selectable = selectable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public TaxonomyDestinations200ApplicationJsonData withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public TaxonomyDestinations200ApplicationJsonData withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
}