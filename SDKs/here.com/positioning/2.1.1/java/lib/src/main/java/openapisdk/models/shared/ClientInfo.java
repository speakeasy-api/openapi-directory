package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClientInfo
 * Information about the client
**/
public class ClientInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firmware")
    public String firmware;
    public ClientInfo withFirmware(String firmware) {
        this.firmware = firmware;
        return this;
    }
    @JsonProperty("manufacturer")
    public String manufacturer;
    public ClientInfo withManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    @JsonProperty("model")
    public String model;
    public ClientInfo withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ClientInfo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public String platform;
    public ClientInfo withPlatform(String platform) {
        this.platform = platform;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public ClientInfo withVersion(String version) {
        this.version = version;
        return this;
    }
}