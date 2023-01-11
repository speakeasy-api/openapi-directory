package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServers200ApplicationJsonServersServerType
 * Type of Server - determines how much ram, disk and cpu a Server has
**/
public class GetServers200ApplicationJsonServersServerType {
    @JsonProperty("cores")
    public Double cores;
    public GetServers200ApplicationJsonServersServerType withCores(Double cores) {
        this.cores = cores;
        return this;
    }
    @JsonProperty("cpu_type")
    public GetServers200ApplicationJsonServersServerTypeCpuTypeEnum cpuType;
    public GetServers200ApplicationJsonServersServerType withCpuType(GetServers200ApplicationJsonServersServerTypeCpuTypeEnum cpuType) {
        this.cpuType = cpuType;
        return this;
    }
    @JsonProperty("deprecated")
    public Boolean deprecated;
    public GetServers200ApplicationJsonServersServerType withDeprecated(Boolean deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetServers200ApplicationJsonServersServerType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("disk")
    public Double disk;
    public GetServers200ApplicationJsonServersServerType withDisk(Double disk) {
        this.disk = disk;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetServers200ApplicationJsonServersServerType withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("memory")
    public Double memory;
    public GetServers200ApplicationJsonServersServerType withMemory(Double memory) {
        this.memory = memory;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetServers200ApplicationJsonServersServerType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("prices")
    public GetServers200ApplicationJsonServersServerTypePrices[] prices;
    public GetServers200ApplicationJsonServersServerType withPrices(GetServers200ApplicationJsonServersServerTypePrices[] prices) {
        this.prices = prices;
        return this;
    }
    @JsonProperty("storage_type")
    public GetServers200ApplicationJsonServersServerTypeStorageTypeEnum storageType;
    public GetServers200ApplicationJsonServersServerType withStorageType(GetServers200ApplicationJsonServersServerTypeStorageTypeEnum storageType) {
        this.storageType = storageType;
        return this;
    }
}