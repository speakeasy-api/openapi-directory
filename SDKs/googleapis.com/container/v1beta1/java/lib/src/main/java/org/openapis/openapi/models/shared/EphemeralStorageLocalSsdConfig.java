/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EphemeralStorageLocalSsdConfig - EphemeralStorageLocalSsdConfig contains configuration for the node ephemeral storage using Local SSDs.
 */
public class EphemeralStorageLocalSsdConfig {
    /**
     * Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD is 375 GB in size. If zero, it means to disable using local SSDs as ephemeral storage. The limit for this value is dependent upon the maximum number of disks available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localSsdCount")
    public Integer localSsdCount;

    public EphemeralStorageLocalSsdConfig withLocalSsdCount(Integer localSsdCount) {
        this.localSsdCount = localSsdCount;
        return this;
    }
    
    public EphemeralStorageLocalSsdConfig(){}
}
