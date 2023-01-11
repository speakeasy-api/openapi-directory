package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServersId200ApplicationJsonServerServerType
 * Type of Server - determines how much ram, disk and cpu a Server has
**/
public class GetServersId200ApplicationJsonServerServerType {
    @JsonProperty("cores")
    public Double cores;
    public GetServersId200ApplicationJsonServerServerType withCores(Double cores) {
        this.cores = cores;
        return this;
    }
    @JsonProperty("cpu_type")
    public GetServersId200ApplicationJsonServerServerTypeCpuTypeEnum cpuType;
    public GetServersId200ApplicationJsonServerServerType withCpuType(GetServersId200ApplicationJsonServerServerTypeCpuTypeEnum cpuType) {
        this.cpuType = cpuType;
        return this;
    }
    @JsonProperty("deprecated")
    public Boolean deprecated;
    public GetServersId200ApplicationJsonServerServerType withDeprecated(Boolean deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetServersId200ApplicationJsonServerServerType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("disk")
    public Double disk;
    public GetServersId200ApplicationJsonServerServerType withDisk(Double disk) {
        this.disk = disk;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetServersId200ApplicationJsonServerServerType withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("memory")
    public Double memory;
    public GetServersId200ApplicationJsonServerServerType withMemory(Double memory) {
        this.memory = memory;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetServersId200ApplicationJsonServerServerType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("prices")
    public GetServersId200ApplicationJsonServerServerTypePrices[] prices;
    public GetServersId200ApplicationJsonServerServerType withPrices(GetServersId200ApplicationJsonServerServerTypePrices[] prices) {
        this.prices = prices;
        return this;
    }
    @JsonProperty("storage_type")
    public GetServersId200ApplicationJsonServerServerTypeStorageTypeEnum storageType;
    public GetServersId200ApplicationJsonServerServerType withStorageType(GetServersId200ApplicationJsonServerServerTypeStorageTypeEnum storageType) {
        this.storageType = storageType;
        return this;
    }
}