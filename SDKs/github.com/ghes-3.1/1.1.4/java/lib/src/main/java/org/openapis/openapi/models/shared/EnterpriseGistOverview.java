/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EnterpriseGistOverview - Response
 */
public class EnterpriseGistOverview {
    @JsonProperty("private_gists")
    public Long privateGists;

    public EnterpriseGistOverview withPrivateGists(Long privateGists) {
        this.privateGists = privateGists;
        return this;
    }
    
    @JsonProperty("public_gists")
    public Long publicGists;

    public EnterpriseGistOverview withPublicGists(Long publicGists) {
        this.publicGists = publicGists;
        return this;
    }
    
    @JsonProperty("total_gists")
    public Long totalGists;

    public EnterpriseGistOverview withTotalGists(Long totalGists) {
        this.totalGists = totalGists;
        return this;
    }
    
    public EnterpriseGistOverview(@JsonProperty("private_gists") Long privateGists, @JsonProperty("public_gists") Long publicGists, @JsonProperty("total_gists") Long totalGists) {
        this.privateGists = privateGists;
        this.publicGists = publicGists;
        this.totalGists = totalGists;
  }
}
