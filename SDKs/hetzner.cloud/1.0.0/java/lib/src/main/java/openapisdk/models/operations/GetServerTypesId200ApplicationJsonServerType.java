package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServerTypesId200ApplicationJsonServerType {
    @JsonProperty("cores")
    public Double cores;
    public GetServerTypesId200ApplicationJsonServerType withCores(Double cores) {
        this.cores = cores;
        return this;
    }
    @JsonProperty("cpu_type")
    public GetServerTypesId200ApplicationJsonServerTypeCpuTypeEnum cpuType;
    public GetServerTypesId200ApplicationJsonServerType withCpuType(GetServerTypesId200ApplicationJsonServerTypeCpuTypeEnum cpuType) {
        this.cpuType = cpuType;
        return this;
    }
    @JsonProperty("deprecated")
    public Boolean deprecated;
    public GetServerTypesId200ApplicationJsonServerType withDeprecated(Boolean deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetServerTypesId200ApplicationJsonServerType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("disk")
    public Double disk;
    public GetServerTypesId200ApplicationJsonServerType withDisk(Double disk) {
        this.disk = disk;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public GetServerTypesId200ApplicationJsonServerType withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("memory")
    public Double memory;
    public GetServerTypesId200ApplicationJsonServerType withMemory(Double memory) {
        this.memory = memory;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetServerTypesId200ApplicationJsonServerType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("prices")
    public GetServerTypesId200ApplicationJsonServerTypePrices[] prices;
    public GetServerTypesId200ApplicationJsonServerType withPrices(GetServerTypesId200ApplicationJsonServerTypePrices[] prices) {
        this.prices = prices;
        return this;
    }
    @JsonProperty("storage_type")
    public GetServerTypesId200ApplicationJsonServerTypeStorageTypeEnum storageType;
    public GetServerTypesId200ApplicationJsonServerType withStorageType(GetServerTypesId200ApplicationJsonServerTypeStorageTypeEnum storageType) {
        this.storageType = storageType;
        return this;
    }
}