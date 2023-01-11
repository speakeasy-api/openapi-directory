package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkFirmwareUpgradesRequestBodyProducts
 * Contains information about the network to update
**/
public class UpdateNetworkFirmwareUpgradesRequestBodyProducts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliance")
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance appliance;
    public UpdateNetworkFirmwareUpgradesRequestBodyProducts withAppliance(UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance appliance) {
        this.appliance = appliance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("camera")
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera camera;
    public UpdateNetworkFirmwareUpgradesRequestBodyProducts withCamera(UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera camera) {
        this.camera = camera;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cellularGateway")
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway cellularGateway;
    public UpdateNetworkFirmwareUpgradesRequestBodyProducts withCellularGateway(UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway cellularGateway) {
        this.cellularGateway = cellularGateway;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmental")
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental environmental;
    public UpdateNetworkFirmwareUpgradesRequestBodyProducts withEnvironmental(UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental environmental) {
        this.environmental = environmental;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sensor")
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor sensor;
    public UpdateNetworkFirmwareUpgradesRequestBodyProducts withSensor(UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor sensor) {
        this.sensor = sensor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("switch")
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch switch_;
    public UpdateNetworkFirmwareUpgradesRequestBodyProducts withSwitch(UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch switch_) {
        this.switch_ = switch_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmxHost")
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost vmxHost;
    public UpdateNetworkFirmwareUpgradesRequestBodyProducts withVmxHost(UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost vmxHost) {
        this.vmxHost = vmxHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wireless")
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless wireless;
    public UpdateNetworkFirmwareUpgradesRequestBodyProducts withWireless(UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless wireless) {
        this.wireless = wireless;
        return this;
    }
}