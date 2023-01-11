package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodeFullMachine
 * Information about the underlying machine
**/
public class NodeFullMachine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public NodeFullMachine withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manufacturer")
    public String manufacturer;
    public NodeFullMachine withManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider")
    public String provider;
    public NodeFullMachine withProvider(String provider) {
        this.provider = provider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serialNumber")
    public String serialNumber;
    public NodeFullMachine withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public NodeFullMachineTypeEnum type;
    public NodeFullMachine withType(NodeFullMachineTypeEnum type) {
        this.type = type;
        return this;
    }
}