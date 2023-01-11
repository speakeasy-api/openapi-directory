package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutImagesId200ApplicationJsonImage {
    @JsonProperty("bound_to")
    public Long boundTo;
    public PutImagesId200ApplicationJsonImage withBoundTo(Long boundTo) {
        this.boundTo = boundTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_id")
    public String buildId;
    public PutImagesId200ApplicationJsonImage withBuildId(String buildId) {
        this.buildId = buildId;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public PutImagesId200ApplicationJsonImage withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("created_from")
    public PutImagesId200ApplicationJsonImageCreatedFrom createdFrom;
    public PutImagesId200ApplicationJsonImage withCreatedFrom(PutImagesId200ApplicationJsonImageCreatedFrom createdFrom) {
        this.createdFrom = createdFrom;
        return this;
    }
    @JsonProperty("deleted")
    public String deleted;
    public PutImagesId200ApplicationJsonImage withDeleted(String deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonProperty("deprecated")
    public String deprecated;
    public PutImagesId200ApplicationJsonImage withDeprecated(String deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public PutImagesId200ApplicationJsonImage withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("disk_size")
    public Double diskSize;
    public PutImagesId200ApplicationJsonImage withDiskSize(Double diskSize) {
        this.diskSize = diskSize;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PutImagesId200ApplicationJsonImage withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("image_size")
    public Double imageSize;
    public PutImagesId200ApplicationJsonImage withImageSize(Double imageSize) {
        this.imageSize = imageSize;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PutImagesId200ApplicationJsonImage withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutImagesId200ApplicationJsonImage withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("os_flavor")
    public PutImagesId200ApplicationJsonImageOsFlavorEnum osFlavor;
    public PutImagesId200ApplicationJsonImage withOsFlavor(PutImagesId200ApplicationJsonImageOsFlavorEnum osFlavor) {
        this.osFlavor = osFlavor;
        return this;
    }
    @JsonProperty("os_version")
    public String osVersion;
    public PutImagesId200ApplicationJsonImage withOsVersion(String osVersion) {
        this.osVersion = osVersion;
        return this;
    }
    @JsonProperty("protection")
    public PutImagesId200ApplicationJsonImageProtection protection;
    public PutImagesId200ApplicationJsonImage withProtection(PutImagesId200ApplicationJsonImageProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rapid_deploy")
    public Boolean rapidDeploy;
    public PutImagesId200ApplicationJsonImage withRapidDeploy(Boolean rapidDeploy) {
        this.rapidDeploy = rapidDeploy;
        return this;
    }
    @JsonProperty("status")
    public PutImagesId200ApplicationJsonImageStatusEnum status;
    public PutImagesId200ApplicationJsonImage withStatus(PutImagesId200ApplicationJsonImageStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("type")
    public PutImagesId200ApplicationJsonImageTypeEnum type;
    public PutImagesId200ApplicationJsonImage withType(PutImagesId200ApplicationJsonImageTypeEnum type) {
        this.type = type;
        return this;
    }
}