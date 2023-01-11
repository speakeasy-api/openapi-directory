package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3Disruptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ferry")
    public V3Disruption[] ferry;
    public V3Disruptions withFerry(V3Disruption[] ferry) {
        this.ferry = ferry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("general")
    public V3Disruption[] general;
    public V3Disruptions withGeneral(V3Disruption[] general) {
        this.general = general;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interstate_train")
    public V3Disruption[] interstateTrain;
    public V3Disruptions withInterstateTrain(V3Disruption[] interstateTrain) {
        this.interstateTrain = interstateTrain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metro_bus")
    public V3Disruption[] metroBus;
    public V3Disruptions withMetroBus(V3Disruption[] metroBus) {
        this.metroBus = metroBus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metro_train")
    public V3Disruption[] metroTrain;
    public V3Disruptions withMetroTrain(V3Disruption[] metroTrain) {
        this.metroTrain = metroTrain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metro_tram")
    public V3Disruption[] metroTram;
    public V3Disruptions withMetroTram(V3Disruption[] metroTram) {
        this.metroTram = metroTram;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("night_bus")
    public V3Disruption[] nightBus;
    public V3Disruptions withNightBus(V3Disruption[] nightBus) {
        this.nightBus = nightBus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regional_bus")
    public V3Disruption[] regionalBus;
    public V3Disruptions withRegionalBus(V3Disruption[] regionalBus) {
        this.regionalBus = regionalBus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regional_coach")
    public V3Disruption[] regionalCoach;
    public V3Disruptions withRegionalCoach(V3Disruption[] regionalCoach) {
        this.regionalCoach = regionalCoach;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regional_train")
    public V3Disruption[] regionalTrain;
    public V3Disruptions withRegionalTrain(V3Disruption[] regionalTrain) {
        this.regionalTrain = regionalTrain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("school_bus")
    public V3Disruption[] schoolBus;
    public V3Disruptions withSchoolBus(V3Disruption[] schoolBus) {
        this.schoolBus = schoolBus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skybus")
    public V3Disruption[] skybus;
    public V3Disruptions withSkybus(V3Disruption[] skybus) {
        this.skybus = skybus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxi")
    public V3Disruption[] taxi;
    public V3Disruptions withTaxi(V3Disruption[] taxi) {
        this.taxi = taxi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telebus")
    public V3Disruption[] telebus;
    public V3Disruptions withTelebus(V3Disruption[] telebus) {
        this.telebus = telebus;
        return this;
    }
}