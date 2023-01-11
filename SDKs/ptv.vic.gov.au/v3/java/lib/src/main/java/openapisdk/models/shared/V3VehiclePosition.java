package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class V3VehiclePosition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bearing")
    public Double bearing;
    public V3VehiclePosition withBearing(Double bearing) {
        this.bearing = bearing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("datetime_utc")
    public OffsetDateTime datetimeUtc;
    public V3VehiclePosition withDatetimeUtc(OffsetDateTime datetimeUtc) {
        this.datetimeUtc = datetimeUtc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public String direction;
    public V3VehiclePosition withDirection(String direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("easting")
    public Double easting;
    public V3VehiclePosition withEasting(Double easting) {
        this.easting = easting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expiry_time")
    public OffsetDateTime expiryTime;
    public V3VehiclePosition withExpiryTime(OffsetDateTime expiryTime) {
        this.expiryTime = expiryTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Double latitude;
    public V3VehiclePosition withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Double longitude;
    public V3VehiclePosition withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("northing")
    public Double northing;
    public V3VehiclePosition withNorthing(Double northing) {
        this.northing = northing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supplier")
    public String supplier;
    public V3VehiclePosition withSupplier(String supplier) {
        this.supplier = supplier;
        return this;
    }
}