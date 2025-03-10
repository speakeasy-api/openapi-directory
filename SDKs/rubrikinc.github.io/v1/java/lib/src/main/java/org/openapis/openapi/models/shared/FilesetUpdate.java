/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * FilesetUpdate - Properties to update.
 */
public class FilesetUpdate {
    /**
     * Assign Fileset to SLA domain. Existing snapshots of the object will be retained with the configuration of specified SLA Domain.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configuredSlaDomainId")
    public String configuredSlaDomainId;

    public FilesetUpdate withConfiguredSlaDomainId(String configuredSlaDomainId) {
        this.configuredSlaDomainId = configuredSlaDomainId;
        return this;
    }
    
    /**
     * Whether to force a full on the whole fileset or certain partitions of the fileset. If this is set to true and no partitionIds are provided, then a full will be forced on the whole fileset. If set to true and partitionIds are provided, then we will force a full on only those partitions.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forceFull")
    public Boolean forceFull;

    public FilesetUpdate withForceFull(Boolean forceFull) {
        this.forceFull = forceFull;
        return this;
    }
    
    /**
     * Assign partition ids to set the force full. In order for this to be valid input, forceFull must be set to true.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forceFullPartitionIds")
    public Integer[] forceFullPartitionIds;

    public FilesetUpdate withForceFullPartitionIds(Integer[] forceFullPartitionIds) {
        this.forceFullPartitionIds = forceFullPartitionIds;
        return this;
    }
    
    /**
     * Rubrik CDM uses a prefix match to select the latest SnapMirror snapshot that matches this value during a full backup of a SnapMirror destination share.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapMirrorLabelForFullBackup")
    public String snapMirrorLabelForFullBackup;

    public FilesetUpdate withSnapMirrorLabelForFullBackup(String snapMirrorLabelForFullBackup) {
        this.snapMirrorLabelForFullBackup = snapMirrorLabelForFullBackup;
        return this;
    }
    
    /**
     * Rubrik CDM selects the latest SnapMirror snapshot that matches this value using a prefix match during an incremental backup of a SnapMirror destination share.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapMirrorLabelForIncrementalBackup")
    public String snapMirrorLabelForIncrementalBackup;

    public FilesetUpdate withSnapMirrorLabelForIncrementalBackup(String snapMirrorLabelForIncrementalBackup) {
        this.snapMirrorLabelForIncrementalBackup = snapMirrorLabelForIncrementalBackup;
        return this;
    }
    
    public FilesetUpdate(){}
}
