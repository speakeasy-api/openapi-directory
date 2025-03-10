/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ClusterApiVersion - REST API version running on the cluster.
 */
public class ClusterApiVersion {
    /**
     * REST API version.
     */
    @JsonProperty("apiVersion")
    public String apiVersion;

    public ClusterApiVersion withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    
    public ClusterApiVersion(@JsonProperty("apiVersion") String apiVersion) {
        this.apiVersion = apiVersion;
  }
}
