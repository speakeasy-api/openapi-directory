package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Bucket
 * A bucket.
**/
public class Bucket {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acl")
    public BucketAccessControl[] acl;
    public Bucket withAcl(BucketAccessControl[] acl) {
        this.acl = acl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoclass")
    public BucketAutoclass autoclass;
    public Bucket withAutoclass(BucketAutoclass autoclass) {
        this.autoclass = autoclass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing")
    public BucketBilling billing;
    public Bucket withBilling(BucketBilling billing) {
        this.billing = billing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cors")
    public BucketCors[] cors;
    public Bucket withCors(BucketCors[] cors) {
        this.cors = cors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customPlacementConfig")
    public BucketCustomPlacementConfig customPlacementConfig;
    public Bucket withCustomPlacementConfig(BucketCustomPlacementConfig customPlacementConfig) {
        this.customPlacementConfig = customPlacementConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultEventBasedHold")
    public Boolean defaultEventBasedHold;
    public Bucket withDefaultEventBasedHold(Boolean defaultEventBasedHold) {
        this.defaultEventBasedHold = defaultEventBasedHold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultObjectAcl")
    public ObjectAccessControl[] defaultObjectAcl;
    public Bucket withDefaultObjectAcl(ObjectAccessControl[] defaultObjectAcl) {
        this.defaultObjectAcl = defaultObjectAcl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryption")
    public BucketEncryption encryption;
    public Bucket withEncryption(BucketEncryption encryption) {
        this.encryption = encryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Bucket withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamConfiguration")
    public BucketIamConfiguration iamConfiguration;
    public Bucket withIamConfiguration(BucketIamConfiguration iamConfiguration) {
        this.iamConfiguration = iamConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Bucket withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Bucket withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Bucket withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecycle")
    public BucketLifecycle lifecycle;
    public Bucket withLifecycle(BucketLifecycle lifecycle) {
        this.lifecycle = lifecycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public Bucket withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationType")
    public String locationType;
    public Bucket withLocationType(String locationType) {
        this.locationType = locationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logging")
    public BucketLogging logging;
    public Bucket withLogging(BucketLogging logging) {
        this.logging = logging;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metageneration")
    public String metageneration;
    public Bucket withMetageneration(String metageneration) {
        this.metageneration = metageneration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Bucket withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public BucketOwner owner;
    public Bucket withOwner(BucketOwner owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectNumber")
    public String projectNumber;
    public Bucket withProjectNumber(String projectNumber) {
        this.projectNumber = projectNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retentionPolicy")
    public BucketRetentionPolicy retentionPolicy;
    public Bucket withRetentionPolicy(BucketRetentionPolicy retentionPolicy) {
        this.retentionPolicy = retentionPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rpo")
    public String rpo;
    public Bucket withRpo(String rpo) {
        this.rpo = rpo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("satisfiesPZS")
    public Boolean satisfiesPZS;
    public Bucket withSatisfiesPzs(Boolean satisfiesPZS) {
        this.satisfiesPZS = satisfiesPZS;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public Bucket withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageClass")
    public String storageClass;
    public Bucket withStorageClass(String storageClass) {
        this.storageClass = storageClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("timeCreated")
    public OffsetDateTime timeCreated;
    public Bucket withTimeCreated(OffsetDateTime timeCreated) {
        this.timeCreated = timeCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated")
    public OffsetDateTime updated;
    public Bucket withUpdated(OffsetDateTime updated) {
        this.updated = updated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versioning")
    public BucketVersioning versioning;
    public Bucket withVersioning(BucketVersioning versioning) {
        this.versioning = versioning;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public BucketWebsite website;
    public Bucket withWebsite(BucketWebsite website) {
        this.website = website;
        return this;
    }
}