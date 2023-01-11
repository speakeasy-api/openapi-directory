package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EventDistrictPointsPoints {
    @JsonProperty("alliance_points")
    public Long alliancePoints;
    public EventDistrictPointsPoints withAlliancePoints(Long alliancePoints) {
        this.alliancePoints = alliancePoints;
        return this;
    }
    @JsonProperty("award_points")
    public Long awardPoints;
    public EventDistrictPointsPoints withAwardPoints(Long awardPoints) {
        this.awardPoints = awardPoints;
        return this;
    }
    @JsonProperty("elim_points")
    public Long elimPoints;
    public EventDistrictPointsPoints withElimPoints(Long elimPoints) {
        this.elimPoints = elimPoints;
        return this;
    }
    @JsonProperty("qual_points")
    public Long qualPoints;
    public EventDistrictPointsPoints withQualPoints(Long qualPoints) {
        this.qualPoints = qualPoints;
        return this;
    }
    @JsonProperty("total")
    public Long total;
    public EventDistrictPointsPoints withTotal(Long total) {
        this.total = total;
        return this;
    }
}