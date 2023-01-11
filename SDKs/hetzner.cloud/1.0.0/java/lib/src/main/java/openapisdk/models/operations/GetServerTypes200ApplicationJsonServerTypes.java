package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServerTypes200ApplicationJsonServerTypes {
    @JsonProperty("cores")
    public Double cores;
    public GetServerTypes200ApplicationJsonServerTypes withCores(Double cores) {
        this.cores = cores;
        return this;
    }
    @JsonProperty("cpu_type")
    public GetServerTypes200ApplicationJsonServerTypesCpuTypeEnum cpuType;
    public GetServerTypes200ApplicationJsonServerTypes withCpuType(GetServerTypes200ApplicationJsonServerTypesCpuTypeEnum cpuType) {
        this.cpuType = cpuType;
        return this;
    }
    @JsonProperty("deprecated")
    public Boolean deprecated;
    public GetServerTypes200ApplicationJsonServerTypes withDeprecated(Boolean deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetServerTypes200ApplicationJsonServerTypes withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("disk")
    public Double disk;
    public GetServerTypes200ApplicationJsonServerTypes withDisk(Double disk) {
        this.disk = disk;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public GetServerTypes200ApplicationJsonServerTypes withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("memory")
    public Double memory;
    public GetServerTypes200ApplicationJsonServerTypes withMemory(Double memory) {
        this.memory = memory;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetServerTypes200ApplicationJsonServerTypes withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("prices")
    public GetServerTypes200ApplicationJsonServerTypesPrices[] prices;
    public GetServerTypes200ApplicationJsonServerTypes withPrices(GetServerTypes200ApplicationJsonServerTypesPrices[] prices) {
        this.prices = prices;
        return this;
    }
    @JsonProperty("storage_type")
    public GetServerTypes200ApplicationJsonServerTypesStorageTypeEnum storageType;
    public GetServerTypes200ApplicationJsonServerTypes withStorageType(GetServerTypes200ApplicationJsonServerTypesStorageTypeEnum storageType) {
        this.storageType = storageType;
        return this;
    }
}