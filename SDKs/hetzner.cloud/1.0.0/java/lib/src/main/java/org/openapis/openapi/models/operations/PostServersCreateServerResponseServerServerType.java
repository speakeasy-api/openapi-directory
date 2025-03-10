/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersCreateServerResponseServerServerType - Type of Server - determines how much ram, disk and cpu a Server has
 */
public class PostServersCreateServerResponseServerServerType {
    /**
     * Number of cpu cores a Server of this type will have
     */
    @JsonProperty("cores")
    public Double cores;

    public PostServersCreateServerResponseServerServerType withCores(Double cores) {
        this.cores = cores;
        return this;
    }
    
    /**
     * Type of cpu
     */
    @JsonProperty("cpu_type")
    public PostServersCreateServerResponseServerServerTypeCpuTypeEnum cpuType;

    public PostServersCreateServerResponseServerServerType withCpuType(PostServersCreateServerResponseServerServerTypeCpuTypeEnum cpuType) {
        this.cpuType = cpuType;
        return this;
    }
    
    /**
     * True if Server type is deprecated
     */
    @JsonProperty("deprecated")
    public Boolean deprecated;

    public PostServersCreateServerResponseServerServerType withDeprecated(Boolean deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    
    /**
     * Description of the Server type
     */
    @JsonProperty("description")
    public String description;

    public PostServersCreateServerResponseServerServerType withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * Disk size a Server of this type will have in GB
     */
    @JsonProperty("disk")
    public Double disk;

    public PostServersCreateServerResponseServerServerType withDisk(Double disk) {
        this.disk = disk;
        return this;
    }
    
    /**
     * ID of the Server type
     */
    @JsonProperty("id")
    public Long id;

    public PostServersCreateServerResponseServerServerType withId(Long id) {
        this.id = id;
        return this;
    }
    
    /**
     * Memory a Server of this type will have in GB
     */
    @JsonProperty("memory")
    public Double memory;

    public PostServersCreateServerResponseServerServerType withMemory(Double memory) {
        this.memory = memory;
        return this;
    }
    
    /**
     * Unique identifier of the Server type
     */
    @JsonProperty("name")
    public String name;

    public PostServersCreateServerResponseServerServerType withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * Prices in different Locations
     */
    @JsonProperty("prices")
    public PostServersCreateServerResponseServerServerTypePrices[] prices;

    public PostServersCreateServerResponseServerServerType withPrices(PostServersCreateServerResponseServerServerTypePrices[] prices) {
        this.prices = prices;
        return this;
    }
    
    /**
     * Type of Server boot drive. Local has higher speed. Network has better availability.
     */
    @JsonProperty("storage_type")
    public PostServersCreateServerResponseServerServerTypeStorageTypeEnum storageType;

    public PostServersCreateServerResponseServerServerType withStorageType(PostServersCreateServerResponseServerServerTypeStorageTypeEnum storageType) {
        this.storageType = storageType;
        return this;
    }
    
    public PostServersCreateServerResponseServerServerType(@JsonProperty("cores") Double cores, @JsonProperty("cpu_type") PostServersCreateServerResponseServerServerTypeCpuTypeEnum cpuType, @JsonProperty("deprecated") Boolean deprecated, @JsonProperty("description") String description, @JsonProperty("disk") Double disk, @JsonProperty("id") Long id, @JsonProperty("memory") Double memory, @JsonProperty("name") String name, @JsonProperty("prices") PostServersCreateServerResponseServerServerTypePrices[] prices, @JsonProperty("storage_type") PostServersCreateServerResponseServerServerTypeStorageTypeEnum storageType) {
        this.cores = cores;
        this.cpuType = cpuType;
        this.deprecated = deprecated;
        this.description = description;
        this.disk = disk;
        this.id = id;
        this.memory = memory;
        this.name = name;
        this.prices = prices;
        this.storageType = storageType;
  }
}
