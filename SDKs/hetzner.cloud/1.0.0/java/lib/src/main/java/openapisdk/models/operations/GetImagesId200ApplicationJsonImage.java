package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetImagesId200ApplicationJsonImage {
    @JsonProperty("bound_to")
    public Long boundTo;
    public GetImagesId200ApplicationJsonImage withBoundTo(Long boundTo) {
        this.boundTo = boundTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_id")
    public String buildId;
    public GetImagesId200ApplicationJsonImage withBuildId(String buildId) {
        this.buildId = buildId;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public GetImagesId200ApplicationJsonImage withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("created_from")
    public GetImagesId200ApplicationJsonImageCreatedFrom createdFrom;
    public GetImagesId200ApplicationJsonImage withCreatedFrom(GetImagesId200ApplicationJsonImageCreatedFrom createdFrom) {
        this.createdFrom = createdFrom;
        return this;
    }
    @JsonProperty("deleted")
    public String deleted;
    public GetImagesId200ApplicationJsonImage withDeleted(String deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonProperty("deprecated")
    public String deprecated;
    public GetImagesId200ApplicationJsonImage withDeprecated(String deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetImagesId200ApplicationJsonImage withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("disk_size")
    public Double diskSize;
    public GetImagesId200ApplicationJsonImage withDiskSize(Double diskSize) {
        this.diskSize = diskSize;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetImagesId200ApplicationJsonImage withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("image_size")
    public Double imageSize;
    public GetImagesId200ApplicationJsonImage withImageSize(Double imageSize) {
        this.imageSize = imageSize;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GetImagesId200ApplicationJsonImage withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetImagesId200ApplicationJsonImage withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("os_flavor")
    public GetImagesId200ApplicationJsonImageOsFlavorEnum osFlavor;
    public GetImagesId200ApplicationJsonImage withOsFlavor(GetImagesId200ApplicationJsonImageOsFlavorEnum osFlavor) {
        this.osFlavor = osFlavor;
        return this;
    }
    @JsonProperty("os_version")
    public String osVersion;
    public GetImagesId200ApplicationJsonImage withOsVersion(String osVersion) {
        this.osVersion = osVersion;
        return this;
    }
    @JsonProperty("protection")
    public GetImagesId200ApplicationJsonImageProtection protection;
    public GetImagesId200ApplicationJsonImage withProtection(GetImagesId200ApplicationJsonImageProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rapid_deploy")
    public Boolean rapidDeploy;
    public GetImagesId200ApplicationJsonImage withRapidDeploy(Boolean rapidDeploy) {
        this.rapidDeploy = rapidDeploy;
        return this;
    }
    @JsonProperty("status")
    public GetImagesId200ApplicationJsonImageStatusEnum status;
    public GetImagesId200ApplicationJsonImage withStatus(GetImagesId200ApplicationJsonImageStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("type")
    public GetImagesId200ApplicationJsonImageTypeEnum type;
    public GetImagesId200ApplicationJsonImage withType(GetImagesId200ApplicationJsonImageTypeEnum type) {
        this.type = type;
        return this;
    }
}