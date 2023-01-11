package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DistrictRankingEventPoints {
    @JsonProperty("alliance_points")
    public Long alliancePoints;
    public DistrictRankingEventPoints withAlliancePoints(Long alliancePoints) {
        this.alliancePoints = alliancePoints;
        return this;
    }
    @JsonProperty("award_points")
    public Long awardPoints;
    public DistrictRankingEventPoints withAwardPoints(Long awardPoints) {
        this.awardPoints = awardPoints;
        return this;
    }
    @JsonProperty("district_cmp")
    public Boolean districtCmp;
    public DistrictRankingEventPoints withDistrictCmp(Boolean districtCmp) {
        this.districtCmp = districtCmp;
        return this;
    }
    @JsonProperty("elim_points")
    public Long elimPoints;
    public DistrictRankingEventPoints withElimPoints(Long elimPoints) {
        this.elimPoints = elimPoints;
        return this;
    }
    @JsonProperty("event_key")
    public String eventKey;
    public DistrictRankingEventPoints withEventKey(String eventKey) {
        this.eventKey = eventKey;
        return this;
    }
    @JsonProperty("qual_points")
    public Long qualPoints;
    public DistrictRankingEventPoints withQualPoints(Long qualPoints) {
        this.qualPoints = qualPoints;
        return this;
    }
    @JsonProperty("total")
    public Long total;
    public DistrictRankingEventPoints withTotal(Long total) {
        this.total = total;
        return this;
    }
}