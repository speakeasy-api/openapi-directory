package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TripsTripDetails200ApplicationJsonResultTrack {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccelerationCount")
    public Double accelerationCount;
    public TripsTripDetails200ApplicationJsonResultTrack withAccelerationCount(Double accelerationCount) {
        this.accelerationCount = accelerationCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AddressEnd")
    public String addressEnd;
    public TripsTripDetails200ApplicationJsonResultTrack withAddressEnd(String addressEnd) {
        this.addressEnd = addressEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AddressFinishParts")
    public TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts addressFinishParts;
    public TripsTripDetails200ApplicationJsonResultTrack withAddressFinishParts(TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts addressFinishParts) {
        this.addressFinishParts = addressFinishParts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AddressStart")
    public String addressStart;
    public TripsTripDetails200ApplicationJsonResultTrack withAddressStart(String addressStart) {
        this.addressStart = addressStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AddressStartParts")
    public TripsTripDetails200ApplicationJsonResultTrackAddressStartParts addressStartParts;
    public TripsTripDetails200ApplicationJsonResultTrack withAddressStartParts(TripsTripDetails200ApplicationJsonResultTrackAddressStartParts addressStartParts) {
        this.addressStartParts = addressStartParts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BeaconId")
    public Double beaconId;
    public TripsTripDetails200ApplicationJsonResultTrack withBeaconId(Double beaconId) {
        this.beaconId = beaconId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CityFinish")
    public String cityFinish;
    public TripsTripDetails200ApplicationJsonResultTrack withCityFinish(String cityFinish) {
        this.cityFinish = cityFinish;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CityStart")
    public String cityStart;
    public TripsTripDetails200ApplicationJsonResultTrack withCityStart(String cityStart) {
        this.cityStart = cityStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DecelerationCount")
    public Double decelerationCount;
    public TripsTripDetails200ApplicationJsonResultTrack withDecelerationCount(Double decelerationCount) {
        this.decelerationCount = decelerationCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Distance")
    public Double distance;
    public TripsTripDetails200ApplicationJsonResultTrack withDistance(Double distance) {
        this.distance = distance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DrivingTips")
    public String drivingTips;
    public TripsTripDetails200ApplicationJsonResultTrack withDrivingTips(String drivingTips) {
        this.drivingTips = drivingTips;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Duration")
    public Double duration;
    public TripsTripDetails200ApplicationJsonResultTrack withDuration(Double duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EcoScore")
    public Double ecoScore;
    public TripsTripDetails200ApplicationJsonResultTrack withEcoScore(Double ecoScore) {
        this.ecoScore = ecoScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EcoScoreBrakes")
    public Double ecoScoreBrakes;
    public TripsTripDetails200ApplicationJsonResultTrack withEcoScoreBrakes(Double ecoScoreBrakes) {
        this.ecoScoreBrakes = ecoScoreBrakes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EcoScoreDepreciation")
    public Double ecoScoreDepreciation;
    public TripsTripDetails200ApplicationJsonResultTrack withEcoScoreDepreciation(Double ecoScoreDepreciation) {
        this.ecoScoreDepreciation = ecoScoreDepreciation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EcoScoreFuel")
    public Double ecoScoreFuel;
    public TripsTripDetails200ApplicationJsonResultTrack withEcoScoreFuel(Double ecoScoreFuel) {
        this.ecoScoreFuel = ecoScoreFuel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EcoScoreTyres")
    public Double ecoScoreTyres;
    public TripsTripDetails200ApplicationJsonResultTrack withEcoScoreTyres(Double ecoScoreTyres) {
        this.ecoScoreTyres = ecoScoreTyres;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndDate")
    public String endDate;
    public TripsTripDetails200ApplicationJsonResultTrack withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HighOverSpeedMileage")
    public Double highOverSpeedMileage;
    public TripsTripDetails200ApplicationJsonResultTrack withHighOverSpeedMileage(Double highOverSpeedMileage) {
        this.highOverSpeedMileage = highOverSpeedMileage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MidOverSpeedMileage")
    public Double midOverSpeedMileage;
    public TripsTripDetails200ApplicationJsonResultTrack withMidOverSpeedMileage(Double midOverSpeedMileage) {
        this.midOverSpeedMileage = midOverSpeedMileage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OriginChanged")
    public Boolean originChanged;
    public TripsTripDetails200ApplicationJsonResultTrack withOriginChanged(Boolean originChanged) {
        this.originChanged = originChanged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PhoneUsage")
    public Double phoneUsage;
    public TripsTripDetails200ApplicationJsonResultTrack withPhoneUsage(Double phoneUsage) {
        this.phoneUsage = phoneUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Points")
    public TripsTripDetails200ApplicationJsonResultTrackPoints[] points;
    public TripsTripDetails200ApplicationJsonResultTrack withPoints(TripsTripDetails200ApplicationJsonResultTrackPoints[] points) {
        this.points = points;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rating")
    public Double rating;
    public TripsTripDetails200ApplicationJsonResultTrack withRating(Double rating) {
        this.rating = rating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rating100")
    public Double rating100;
    public TripsTripDetails200ApplicationJsonResultTrack withRating100(Double rating100) {
        this.rating100 = rating100;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RatingAcceleration")
    public Double ratingAcceleration;
    public TripsTripDetails200ApplicationJsonResultTrack withRatingAcceleration(Double ratingAcceleration) {
        this.ratingAcceleration = ratingAcceleration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RatingAcceleration100")
    public Double ratingAcceleration100;
    public TripsTripDetails200ApplicationJsonResultTrack withRatingAcceleration100(Double ratingAcceleration100) {
        this.ratingAcceleration100 = ratingAcceleration100;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RatingBraking")
    public Double ratingBraking;
    public TripsTripDetails200ApplicationJsonResultTrack withRatingBraking(Double ratingBraking) {
        this.ratingBraking = ratingBraking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RatingBraking100")
    public Double ratingBraking100;
    public TripsTripDetails200ApplicationJsonResultTrack withRatingBraking100(Double ratingBraking100) {
        this.ratingBraking100 = ratingBraking100;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RatingCornering")
    public Double ratingCornering;
    public TripsTripDetails200ApplicationJsonResultTrack withRatingCornering(Double ratingCornering) {
        this.ratingCornering = ratingCornering;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RatingCornering100")
    public Double ratingCornering100;
    public TripsTripDetails200ApplicationJsonResultTrack withRatingCornering100(Double ratingCornering100) {
        this.ratingCornering100 = ratingCornering100;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RatingPhoneDistraction100")
    public Double ratingPhoneDistraction100;
    public TripsTripDetails200ApplicationJsonResultTrack withRatingPhoneDistraction100(Double ratingPhoneDistraction100) {
        this.ratingPhoneDistraction100 = ratingPhoneDistraction100;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RatingPhoneUsage")
    public Double ratingPhoneUsage;
    public TripsTripDetails200ApplicationJsonResultTrack withRatingPhoneUsage(Double ratingPhoneUsage) {
        this.ratingPhoneUsage = ratingPhoneUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RatingSpeeding")
    public Double ratingSpeeding;
    public TripsTripDetails200ApplicationJsonResultTrack withRatingSpeeding(Double ratingSpeeding) {
        this.ratingSpeeding = ratingSpeeding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RatingSpeeding100")
    public Double ratingSpeeding100;
    public TripsTripDetails200ApplicationJsonResultTrack withRatingSpeeding100(Double ratingSpeeding100) {
        this.ratingSpeeding100 = ratingSpeeding100;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RatingTimeOfDay")
    public Double ratingTimeOfDay;
    public TripsTripDetails200ApplicationJsonResultTrack withRatingTimeOfDay(Double ratingTimeOfDay) {
        this.ratingTimeOfDay = ratingTimeOfDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShareType")
    public String shareType;
    public TripsTripDetails200ApplicationJsonResultTrack withShareType(String shareType) {
        this.shareType = shareType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartDate")
    public String startDate;
    public TripsTripDetails200ApplicationJsonResultTrack withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public TripsTripDetails200ApplicationJsonResultTrack withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrackOriginCode")
    public String trackOriginCode;
    public TripsTripDetails200ApplicationJsonResultTrack withTrackOriginCode(String trackOriginCode) {
        this.trackOriginCode = trackOriginCode;
        return this;
    }
}