package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TripsTripDetails200ApplicationJsonResultTrackPoints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlertType")
    public String alertType;
    public TripsTripDetails200ApplicationJsonResultTrackPoints withAlertType(String alertType) {
        this.alertType = alertType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlertValue")
    public Double alertValue;
    public TripsTripDetails200ApplicationJsonResultTrackPoints withAlertValue(Double alertValue) {
        this.alertValue = alertValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Cornering")
    public Boolean cornering;
    public TripsTripDetails200ApplicationJsonResultTrackPoints withCornering(Boolean cornering) {
        this.cornering = cornering;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Course")
    public Double course;
    public TripsTripDetails200ApplicationJsonResultTrackPoints withCourse(Double course) {
        this.course = course;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Height")
    public Double height;
    public TripsTripDetails200ApplicationJsonResultTrackPoints withHeight(Double height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public Double id;
    public TripsTripDetails200ApplicationJsonResultTrackPoints withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Lateral")
    public Double lateral;
    public TripsTripDetails200ApplicationJsonResultTrackPoints withLateral(Double lateral) {
        this.lateral = lateral;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Latitude")
    public Double latitude;
    public TripsTripDetails200ApplicationJsonResultTrackPoints withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Longitude")
    public Double longitude;
    public TripsTripDetails200ApplicationJsonResultTrackPoints withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MidSpeed")
    public Double midSpeed;
    public TripsTripDetails200ApplicationJsonResultTrackPoints withMidSpeed(Double midSpeed) {
        this.midSpeed = midSpeed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Number")
    public Double number;
    public TripsTripDetails200ApplicationJsonResultTrackPoints withNumber(Double number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PhoneUsage")
    public Boolean phoneUsage;
    public TripsTripDetails200ApplicationJsonResultTrackPoints withPhoneUsage(Boolean phoneUsage) {
        this.phoneUsage = phoneUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PointDate")
    public String pointDate;
    public TripsTripDetails200ApplicationJsonResultTrackPoints withPointDate(String pointDate) {
        this.pointDate = pointDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Speed")
    public Double speed;
    public TripsTripDetails200ApplicationJsonResultTrackPoints withSpeed(Double speed) {
        this.speed = speed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SpeedLimit")
    public Double speedLimit;
    public TripsTripDetails200ApplicationJsonResultTrackPoints withSpeedLimit(Double speedLimit) {
        this.speedLimit = speedLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SpeedType")
    public String speedType;
    public TripsTripDetails200ApplicationJsonResultTrackPoints withSpeedType(String speedType) {
        this.speedType = speedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalMeters")
    public Double totalMeters;
    public TripsTripDetails200ApplicationJsonResultTrackPoints withTotalMeters(Double totalMeters) {
        this.totalMeters = totalMeters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Yaw")
    public Double yaw;
    public TripsTripDetails200ApplicationJsonResultTrackPoints withYaw(Double yaw) {
        this.yaw = yaw;
        return this;
    }
}