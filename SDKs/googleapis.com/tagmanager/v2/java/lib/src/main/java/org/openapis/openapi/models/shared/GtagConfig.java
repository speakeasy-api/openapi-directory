/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GtagConfig - Represents a Google tag configuration.
 */
public class GtagConfig {
    /**
     * Google tag account ID.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;

    public GtagConfig withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    
    /**
     * Google tag container ID.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerId")
    public String containerId;

    public GtagConfig withContainerId(String containerId) {
        this.containerId = containerId;
        return this;
    }
    
    /**
     * The fingerprint of the Google tag config as computed at storage time. This value is recomputed whenever the config is modified.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fingerprint")
    public String fingerprint;

    public GtagConfig withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    
    /**
     * The ID uniquely identifies the Google tag config.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gtagConfigId")
    public String gtagConfigId;

    public GtagConfig withGtagConfigId(String gtagConfigId) {
        this.gtagConfigId = gtagConfigId;
        return this;
    }
    
    /**
     * The Google tag config's parameters. @mutable tagmanager.accounts.containers.workspaces.gtag_config.create @mutable tagmanager.accounts.containers.workspaces.gtag_config.update
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameter")
    public Parameter[] parameter;

    public GtagConfig withParameter(Parameter[] parameter) {
        this.parameter = parameter;
        return this;
    }
    
    /**
     * Google tag config's API relative path.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;

    public GtagConfig withPath(String path) {
        this.path = path;
        return this;
    }
    
    /**
     * Auto generated link to the tag manager UI
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagManagerUrl")
    public String tagManagerUrl;

    public GtagConfig withTagManagerUrl(String tagManagerUrl) {
        this.tagManagerUrl = tagManagerUrl;
        return this;
    }
    
    /**
     * Google tag config type. @required tagmanager.accounts.containers.workspaces.gtag_config.create @required tagmanager.accounts.containers.workspaces.gtag_config.update @mutable tagmanager.accounts.containers.workspaces.gtag_config.create @mutable tagmanager.accounts.containers.workspaces.gtag_config.update
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;

    public GtagConfig withType(String type) {
        this.type = type;
        return this;
    }
    
    /**
     * Google tag workspace ID. Only used by GTM containers. Set to 0 otherwise.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspaceId")
    public String workspaceId;

    public GtagConfig withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
    
    public GtagConfig(){}
}
