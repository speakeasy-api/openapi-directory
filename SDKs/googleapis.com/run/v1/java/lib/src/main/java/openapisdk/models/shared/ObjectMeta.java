package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObjectMeta
 * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
**/
public class ObjectMeta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public java.util.Map<String, String> annotations;
    public ObjectMeta withAnnotations(java.util.Map<String, String> annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterName")
    public String clusterName;
    public ObjectMeta withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTimestamp")
    public String creationTimestamp;
    public ObjectMeta withCreationTimestamp(String creationTimestamp) {
        this.creationTimestamp = creationTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletionGracePeriodSeconds")
    public Integer deletionGracePeriodSeconds;
    public ObjectMeta withDeletionGracePeriodSeconds(Integer deletionGracePeriodSeconds) {
        this.deletionGracePeriodSeconds = deletionGracePeriodSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletionTimestamp")
    public String deletionTimestamp;
    public ObjectMeta withDeletionTimestamp(String deletionTimestamp) {
        this.deletionTimestamp = deletionTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finalizers")
    public String[] finalizers;
    public ObjectMeta withFinalizers(String[] finalizers) {
        this.finalizers = finalizers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generateName")
    public String generateName;
    public ObjectMeta withGenerateName(String generateName) {
        this.generateName = generateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generation")
    public Integer generation;
    public ObjectMeta withGeneration(Integer generation) {
        this.generation = generation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ObjectMeta withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ObjectMeta withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespace")
    public String namespace;
    public ObjectMeta withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerReferences")
    public OwnerReference[] ownerReferences;
    public ObjectMeta withOwnerReferences(OwnerReference[] ownerReferences) {
        this.ownerReferences = ownerReferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceVersion")
    public String resourceVersion;
    public ObjectMeta withResourceVersion(String resourceVersion) {
        this.resourceVersion = resourceVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public ObjectMeta withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public ObjectMeta withUid(String uid) {
        this.uid = uid;
        return this;
    }
}