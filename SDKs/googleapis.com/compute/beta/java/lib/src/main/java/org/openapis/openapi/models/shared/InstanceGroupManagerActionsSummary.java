/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class InstanceGroupManagerActionsSummary {
    /**
     * [Output Only] The total number of instances in the managed instance group that are scheduled to be abandoned. Abandoning an instance removes it from the managed instance group without deleting it.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abandoning")
    public Integer abandoning;

    public InstanceGroupManagerActionsSummary withAbandoning(Integer abandoning) {
        this.abandoning = abandoning;
        return this;
    }
    
    /**
     * [Output Only] The number of instances in the managed instance group that are scheduled to be created or are currently being created. If the group fails to create any of these instances, it tries again until it creates the instance successfully. If you have disabled creation retries, this field will not be populated; instead, the creatingWithoutRetries field will be populated.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creating")
    public Integer creating;

    public InstanceGroupManagerActionsSummary withCreating(Integer creating) {
        this.creating = creating;
        return this;
    }
    
    /**
     * [Output Only] The number of instances that the managed instance group will attempt to create. The group attempts to create each instance only once. If the group fails to create any of these instances, it decreases the group's targetSize value accordingly.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creatingWithoutRetries")
    public Integer creatingWithoutRetries;

    public InstanceGroupManagerActionsSummary withCreatingWithoutRetries(Integer creatingWithoutRetries) {
        this.creatingWithoutRetries = creatingWithoutRetries;
        return this;
    }
    
    /**
     * [Output Only] The number of instances in the managed instance group that are scheduled to be deleted or are currently being deleted.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleting")
    public Integer deleting;

    public InstanceGroupManagerActionsSummary withDeleting(Integer deleting) {
        this.deleting = deleting;
        return this;
    }
    
    /**
     * [Output Only] The number of instances in the managed instance group that are running and have no scheduled actions.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("none")
    public Integer none;

    public InstanceGroupManagerActionsSummary withNone(Integer none) {
        this.none = none;
        return this;
    }
    
    /**
     * [Output Only] The number of instances in the managed instance group that are scheduled to be recreated or are currently being being recreated. Recreating an instance deletes the existing root persistent disk and creates a new disk from the image that is defined in the instance template.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recreating")
    public Integer recreating;

    public InstanceGroupManagerActionsSummary withRecreating(Integer recreating) {
        this.recreating = recreating;
        return this;
    }
    
    /**
     * [Output Only] The number of instances in the managed instance group that are being reconfigured with properties that do not require a restart or a recreate action. For example, setting or removing target pools for the instance.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refreshing")
    public Integer refreshing;

    public InstanceGroupManagerActionsSummary withRefreshing(Integer refreshing) {
        this.refreshing = refreshing;
        return this;
    }
    
    /**
     * [Output Only] The number of instances in the managed instance group that are scheduled to be restarted or are currently being restarted.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restarting")
    public Integer restarting;

    public InstanceGroupManagerActionsSummary withRestarting(Integer restarting) {
        this.restarting = restarting;
        return this;
    }
    
    /**
     * [Output Only] The number of instances in the managed instance group that are scheduled to be resumed or are currently being resumed.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resuming")
    public Integer resuming;

    public InstanceGroupManagerActionsSummary withResuming(Integer resuming) {
        this.resuming = resuming;
        return this;
    }
    
    /**
     * [Output Only] The number of instances in the managed instance group that are scheduled to be started or are currently being started.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("starting")
    public Integer starting;

    public InstanceGroupManagerActionsSummary withStarting(Integer starting) {
        this.starting = starting;
        return this;
    }
    
    /**
     * [Output Only] The number of instances in the managed instance group that are scheduled to be stopped or are currently being stopped.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stopping")
    public Integer stopping;

    public InstanceGroupManagerActionsSummary withStopping(Integer stopping) {
        this.stopping = stopping;
        return this;
    }
    
    /**
     * [Output Only] The number of instances in the managed instance group that are scheduled to be suspended or are currently being suspended.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspending")
    public Integer suspending;

    public InstanceGroupManagerActionsSummary withSuspending(Integer suspending) {
        this.suspending = suspending;
        return this;
    }
    
    /**
     * [Output Only] The number of instances in the managed instance group that are being verified. See the managedInstances[].currentAction property in the listManagedInstances method documentation.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifying")
    public Integer verifying;

    public InstanceGroupManagerActionsSummary withVerifying(Integer verifying) {
        this.verifying = verifying;
        return this;
    }
    
    public InstanceGroupManagerActionsSummary(){}
}
