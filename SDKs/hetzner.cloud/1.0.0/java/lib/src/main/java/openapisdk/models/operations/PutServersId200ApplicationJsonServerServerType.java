package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutServersId200ApplicationJsonServerServerType
 * Type of Server - determines how much ram, disk and cpu a Server has
**/
public class PutServersId200ApplicationJsonServerServerType {
    @JsonProperty("cores")
    public Double cores;
    public PutServersId200ApplicationJsonServerServerType withCores(Double cores) {
        this.cores = cores;
        return this;
    }
    @JsonProperty("cpu_type")
    public PutServersId200ApplicationJsonServerServerTypeCpuTypeEnum cpuType;
    public PutServersId200ApplicationJsonServerServerType withCpuType(PutServersId200ApplicationJsonServerServerTypeCpuTypeEnum cpuType) {
        this.cpuType = cpuType;
        return this;
    }
    @JsonProperty("deprecated")
    public Boolean deprecated;
    public PutServersId200ApplicationJsonServerServerType withDeprecated(Boolean deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public PutServersId200ApplicationJsonServerServerType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("disk")
    public Double disk;
    public PutServersId200ApplicationJsonServerServerType withDisk(Double disk) {
        this.disk = disk;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PutServersId200ApplicationJsonServerServerType withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("memory")
    public Double memory;
    public PutServersId200ApplicationJsonServerServerType withMemory(Double memory) {
        this.memory = memory;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutServersId200ApplicationJsonServerServerType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("prices")
    public PutServersId200ApplicationJsonServerServerTypePrices[] prices;
    public PutServersId200ApplicationJsonServerServerType withPrices(PutServersId200ApplicationJsonServerServerTypePrices[] prices) {
        this.prices = prices;
        return this;
    }
    @JsonProperty("storage_type")
    public PutServersId200ApplicationJsonServerServerTypeStorageTypeEnum storageType;
    public PutServersId200ApplicationJsonServerServerType withStorageType(PutServersId200ApplicationJsonServerServerTypeStorageTypeEnum storageType) {
        this.storageType = storageType;
        return this;
    }
}