/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PrivatePool - Execution using a private Cloud Build pool.
 */
public class PrivatePool {
    /**
     * Optional. Cloud Storage location where execution outputs should be stored. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifactStorage")
    public String artifactStorage;

    public PrivatePool withArtifactStorage(String artifactStorage) {
        this.artifactStorage = artifactStorage;
        return this;
    }
    
    /**
     * Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;

    public PrivatePool withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    
    /**
     * Required. Resource name of the Cloud Build worker pool to use. The format is `projects/{project}/locations/{location}/workerPools/{pool}`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerPool")
    public String workerPool;

    public PrivatePool withWorkerPool(String workerPool) {
        this.workerPool = workerPool;
        return this;
    }
    
    public PrivatePool(){}
}
