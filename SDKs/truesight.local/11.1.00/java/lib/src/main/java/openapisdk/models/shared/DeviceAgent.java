package openapisdk.models.shared;



/**
 * DeviceAgent
 * Contains all information regarding a specific PATROL Agent.
**/
public class DeviceAgent {
    public String connectionStatus;
    public DeviceAgent withConnectionStatus(String connectionStatus) {
        this.connectionStatus = connectionStatus;
        return this;
    }
    public String id;
    public DeviceAgent withId(String id) {
        this.id = id;
        return this;
    }
    public String name;
    public DeviceAgent withName(String name) {
        this.name = name;
        return this;
    }
    public String os;
    public DeviceAgent withOs(String os) {
        this.os = os;
        return this;
    }
    public String port;
    public DeviceAgent withPort(String port) {
        this.port = port;
        return this;
    }
    public String url;
    public DeviceAgent withUrl(String url) {
        this.url = url;
        return this;
    }
    public String version;
    public DeviceAgent withVersion(String version) {
        this.version = version;
        return this;
    }
}