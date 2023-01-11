package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersCreateServerResponseServerServerType
 * Type of Server - determines how much ram, disk and cpu a Server has
**/
public class PostServersCreateServerResponseServerServerType {
    @JsonProperty("cores")
    public Double cores;
    public PostServersCreateServerResponseServerServerType withCores(Double cores) {
        this.cores = cores;
        return this;
    }
    @JsonProperty("cpu_type")
    public PostServersCreateServerResponseServerServerTypeCpuTypeEnum cpuType;
    public PostServersCreateServerResponseServerServerType withCpuType(PostServersCreateServerResponseServerServerTypeCpuTypeEnum cpuType) {
        this.cpuType = cpuType;
        return this;
    }
    @JsonProperty("deprecated")
    public Boolean deprecated;
    public PostServersCreateServerResponseServerServerType withDeprecated(Boolean deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public PostServersCreateServerResponseServerServerType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("disk")
    public Double disk;
    public PostServersCreateServerResponseServerServerType withDisk(Double disk) {
        this.disk = disk;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersCreateServerResponseServerServerType withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("memory")
    public Double memory;
    public PostServersCreateServerResponseServerServerType withMemory(Double memory) {
        this.memory = memory;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostServersCreateServerResponseServerServerType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("prices")
    public PostServersCreateServerResponseServerServerTypePrices[] prices;
    public PostServersCreateServerResponseServerServerType withPrices(PostServersCreateServerResponseServerServerTypePrices[] prices) {
        this.prices = prices;
        return this;
    }
    @JsonProperty("storage_type")
    public PostServersCreateServerResponseServerServerTypeStorageTypeEnum storageType;
    public PostServersCreateServerResponseServerServerType withStorageType(PostServersCreateServerResponseServerServerTypeStorageTypeEnum storageType) {
        this.storageType = storageType;
        return this;
    }
}