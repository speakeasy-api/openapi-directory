package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Request {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithm")
    public Algorithm algorithm;
    public Request withAlgorithm(Algorithm algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configuration")
    public Configuration configuration;
    public Request withConfiguration(Configuration configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cost_matrices")
    public CostMatrix[] costMatrices;
    public Request withCostMatrices(CostMatrix[] costMatrices) {
        this.costMatrices = costMatrices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectives")
    public Objective[] objectives;
    public Request withObjectives(Objective[] objectives) {
        this.objectives = objectives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relations")
    public Object[] relations;
    public Request withRelations(Object[] relations) {
        this.relations = relations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public Service[] services;
    public Request withServices(Service[] services) {
        this.services = services;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipments")
    public Shipment[] shipments;
    public Request withShipments(Shipment[] shipments) {
        this.shipments = shipments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vehicle_types")
    public VehicleType[] vehicleTypes;
    public Request withVehicleTypes(VehicleType[] vehicleTypes) {
        this.vehicleTypes = vehicleTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vehicles")
    public Vehicle[] vehicles;
    public Request withVehicles(Vehicle[] vehicles) {
        this.vehicles = vehicles;
        return this;
    }
}