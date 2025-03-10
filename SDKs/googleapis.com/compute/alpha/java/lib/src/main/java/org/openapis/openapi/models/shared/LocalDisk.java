/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class LocalDisk {
    /**
     * Specifies the number of such disks.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskCount")
    public Integer diskCount;

    public LocalDisk withDiskCount(Integer diskCount) {
        this.diskCount = diskCount;
        return this;
    }
    
    /**
     * Specifies the size of the disk in base-2 GB.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskSizeGb")
    public Integer diskSizeGb;

    public LocalDisk withDiskSizeGb(Integer diskSizeGb) {
        this.diskSizeGb = diskSizeGb;
        return this;
    }
    
    /**
     * Specifies the desired disk type on the node. This disk type must be a local storage type (e.g.: local-ssd). Note that for nodeTemplates, this should be the name of the disk type and not its URL.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskType")
    public String diskType;

    public LocalDisk withDiskType(String diskType) {
        this.diskType = diskType;
        return this;
    }
    
    public LocalDisk(){}
}
