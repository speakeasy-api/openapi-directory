/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class OrbitalData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aphelion_distance")
    public String aphelionDistance;

    public OrbitalData withAphelionDistance(String aphelionDistance) {
        this.aphelionDistance = aphelionDistance;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ascending_node_longitude")
    public String ascendingNodeLongitude;

    public OrbitalData withAscendingNodeLongitude(String ascendingNodeLongitude) {
        this.ascendingNodeLongitude = ascendingNodeLongitude;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_arc_in_days")
    public Long dataArcInDays;

    public OrbitalData withDataArcInDays(Long dataArcInDays) {
        this.dataArcInDays = dataArcInDays;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eccentricity")
    public String eccentricity;

    public OrbitalData withEccentricity(String eccentricity) {
        this.eccentricity = eccentricity;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("epoch_osculation")
    public String epochOsculation;

    public OrbitalData withEpochOsculation(String epochOsculation) {
        this.epochOsculation = epochOsculation;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("equinox")
    public String equinox;

    public OrbitalData withEquinox(String equinox) {
        this.equinox = equinox;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_observation_date")
    public String firstObservationDate;

    public OrbitalData withFirstObservationDate(String firstObservationDate) {
        this.firstObservationDate = firstObservationDate;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inclination")
    public String inclination;

    public OrbitalData withInclination(String inclination) {
        this.inclination = inclination;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jupiter_tisserand_invariant")
    public String jupiterTisserandInvariant;

    public OrbitalData withJupiterTisserandInvariant(String jupiterTisserandInvariant) {
        this.jupiterTisserandInvariant = jupiterTisserandInvariant;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_observation_date")
    public String lastObservationDate;

    public OrbitalData withLastObservationDate(String lastObservationDate) {
        this.lastObservationDate = lastObservationDate;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mean_anomaly")
    public String meanAnomaly;

    public OrbitalData withMeanAnomaly(String meanAnomaly) {
        this.meanAnomaly = meanAnomaly;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mean_motion")
    public String meanMotion;

    public OrbitalData withMeanMotion(String meanMotion) {
        this.meanMotion = meanMotion;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimum_orbit_intersection")
    public String minimumOrbitIntersection;

    public OrbitalData withMinimumOrbitIntersection(String minimumOrbitIntersection) {
        this.minimumOrbitIntersection = minimumOrbitIntersection;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("observations_used")
    public Long observationsUsed;

    public OrbitalData withObservationsUsed(Long observationsUsed) {
        this.observationsUsed = observationsUsed;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orbit_class")
    public OrbitClass orbitClass;

    public OrbitalData withOrbitClass(OrbitClass orbitClass) {
        this.orbitClass = orbitClass;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orbit_determination_date")
    public String orbitDeterminationDate;

    public OrbitalData withOrbitDeterminationDate(String orbitDeterminationDate) {
        this.orbitDeterminationDate = orbitDeterminationDate;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orbit_id")
    public String orbitId;

    public OrbitalData withOrbitId(String orbitId) {
        this.orbitId = orbitId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orbit_uncertainty")
    public String orbitUncertainty;

    public OrbitalData withOrbitUncertainty(String orbitUncertainty) {
        this.orbitUncertainty = orbitUncertainty;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orbital_period")
    public String orbitalPeriod;

    public OrbitalData withOrbitalPeriod(String orbitalPeriod) {
        this.orbitalPeriod = orbitalPeriod;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perihelion_argument")
    public String perihelionArgument;

    public OrbitalData withPerihelionArgument(String perihelionArgument) {
        this.perihelionArgument = perihelionArgument;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perihelion_distance")
    public String perihelionDistance;

    public OrbitalData withPerihelionDistance(String perihelionDistance) {
        this.perihelionDistance = perihelionDistance;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perihelion_time")
    public String perihelionTime;

    public OrbitalData withPerihelionTime(String perihelionTime) {
        this.perihelionTime = perihelionTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("semi_major_axis")
    public String semiMajorAxis;

    public OrbitalData withSemiMajorAxis(String semiMajorAxis) {
        this.semiMajorAxis = semiMajorAxis;
        return this;
    }
    
    public OrbitalData(){}
}
