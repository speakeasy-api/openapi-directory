/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RevisionStatus - RevisionStatus communicates the observed state of the Revision (from the controller).
 */
public class RevisionStatus {
    /**
     * Conditions communicate information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world. As a Revision is being prepared, it will incrementally update conditions. Revision-specific conditions include: * `ResourcesAvailable`: `True` when underlying resources have been provisioned. * `ContainerHealthy`: `True` when the Revision readiness check completes. * `Active`: `True` when the Revision may receive traffic.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditions")
    public GoogleCloudRunV1Condition[] conditions;

    public RevisionStatus withConditions(GoogleCloudRunV1Condition[] conditions) {
        this.conditions = conditions;
        return this;
    }
    
    /**
     * ImageDigest holds the resolved digest for the image specified within .Spec.Container.Image. The digest is resolved during the creation of Revision. This field holds the digest value regardless of whether a tag or digest was originally specified in the Container object.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageDigest")
    public String imageDigest;

    public RevisionStatus withImageDigest(String imageDigest) {
        this.imageDigest = imageDigest;
        return this;
    }
    
    /**
     * Optional. Specifies the generated logging url for this particular revision based on the revision url template specified in the controller's config.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logUrl")
    public String logUrl;

    public RevisionStatus withLogUrl(String logUrl) {
        this.logUrl = logUrl;
        return this;
    }
    
    /**
     * ObservedGeneration is the 'Generation' of the Revision that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation, and the Ready condition's status is True or False.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("observedGeneration")
    public Integer observedGeneration;

    public RevisionStatus withObservedGeneration(Integer observedGeneration) {
        this.observedGeneration = observedGeneration;
        return this;
    }
    
    /**
     * Not currently used by Cloud Run.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;

    public RevisionStatus withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    
    public RevisionStatus(){}
}
