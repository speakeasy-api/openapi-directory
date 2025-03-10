/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MultiCloudCluster - MultiCloudCluster contains information specific to GKE Multi-Cloud clusters.
 */
public class MultiCloudCluster {
    /**
     * Output only. If cluster_missing is set then it denotes that API(gkemulticloud.googleapis.com) resource for this GKE Multi-Cloud cluster no longer exists.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterMissing")
    public Boolean clusterMissing;

    public MultiCloudCluster withClusterMissing(Boolean clusterMissing) {
        this.clusterMissing = clusterMissing;
        return this;
    }
    
    /**
     * Immutable. Self-link of the GCP resource for the GKE Multi-Cloud cluster. For example: //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/awsClusters/my-cluster //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/azureClusters/my-cluster //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/attachedClusters/my-cluster
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceLink")
    public String resourceLink;

    public MultiCloudCluster withResourceLink(String resourceLink) {
        this.resourceLink = resourceLink;
        return this;
    }
    
    public MultiCloudCluster(){}
}
