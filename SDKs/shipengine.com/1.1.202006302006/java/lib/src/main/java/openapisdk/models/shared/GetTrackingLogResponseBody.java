package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * GetTrackingLogResponseBody
 * A tracking information resource
**/
public class GetTrackingLogResponseBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("actual_delivery_date")
    public OffsetDateTime actualDeliveryDate;
    public GetTrackingLogResponseBody withActualDeliveryDate(OffsetDateTime actualDeliveryDate) {
        this.actualDeliveryDate = actualDeliveryDate;
        return this;
    }
    @JsonProperty("carrier_status_code")
    public String carrierStatusCode;
    public GetTrackingLogResponseBody withCarrierStatusCode(String carrierStatusCode) {
        this.carrierStatusCode = carrierStatusCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_status_description")
    public String carrierStatusDescription;
    public GetTrackingLogResponseBody withCarrierStatusDescription(String carrierStatusDescription) {
        this.carrierStatusDescription = carrierStatusDescription;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("estimated_delivery_date")
    public OffsetDateTime estimatedDeliveryDate;
    public GetTrackingLogResponseBody withEstimatedDeliveryDate(OffsetDateTime estimatedDeliveryDate) {
        this.estimatedDeliveryDate = estimatedDeliveryDate;
        return this;
    }
    @JsonProperty("events")
    public TrackEvent[] events;
    public GetTrackingLogResponseBody withEvents(TrackEvent[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exception_description")
    public String exceptionDescription;
    public GetTrackingLogResponseBody withExceptionDescription(String exceptionDescription) {
        this.exceptionDescription = exceptionDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ship_date")
    public OffsetDateTime shipDate;
    public GetTrackingLogResponseBody withShipDate(OffsetDateTime shipDate) {
        this.shipDate = shipDate;
        return this;
    }
    @JsonProperty("status_code")
    public String statusCode;
    public GetTrackingLogResponseBody withStatusCode(String statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_description")
    public String statusDescription;
    public GetTrackingLogResponseBody withStatusDescription(String statusDescription) {
        this.statusDescription = statusDescription;
        return this;
    }
    @JsonProperty("tracking_number")
    public String trackingNumber;
    public GetTrackingLogResponseBody withTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
        return this;
    }
}