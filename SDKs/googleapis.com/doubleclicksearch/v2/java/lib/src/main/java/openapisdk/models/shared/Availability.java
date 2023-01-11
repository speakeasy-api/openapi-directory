package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Availability
 * A message containing availability data relevant to DoubleClick Search.
**/
public class Availability {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public Availability withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agencyId")
    public String agencyId;
    public Availability withAgencyId(String agencyId) {
        this.agencyId = agencyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availabilityTimestamp")
    public String availabilityTimestamp;
    public Availability withAvailabilityTimestamp(String availabilityTimestamp) {
        this.availabilityTimestamp = availabilityTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;
    public Availability withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segmentationId")
    public String segmentationId;
    public Availability withSegmentationId(String segmentationId) {
        this.segmentationId = segmentationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segmentationName")
    public String segmentationName;
    public Availability withSegmentationName(String segmentationName) {
        this.segmentationName = segmentationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segmentationType")
    public String segmentationType;
    public Availability withSegmentationType(String segmentationType) {
        this.segmentationType = segmentationType;
        return this;
    }
}