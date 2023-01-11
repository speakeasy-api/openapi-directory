package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3StopAmenityDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("car_parking")
    public String carParking;
    public V3StopAmenityDetails withCarParking(String carParking) {
        this.carParking = carParking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cctv")
    public Boolean cctv;
    public V3StopAmenityDetails withCctv(Boolean cctv) {
        this.cctv = cctv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxi_rank")
    public Boolean taxiRank;
    public V3StopAmenityDetails withTaxiRank(Boolean taxiRank) {
        this.taxiRank = taxiRank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toilet")
    public Boolean toilet;
    public V3StopAmenityDetails withToilet(Boolean toilet) {
        this.toilet = toilet;
        return this;
    }
}