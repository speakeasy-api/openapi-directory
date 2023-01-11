package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetImages200ApplicationJsonImages {
    @JsonProperty("bound_to")
    public Long boundTo;
    public GetImages200ApplicationJsonImages withBoundTo(Long boundTo) {
        this.boundTo = boundTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_id")
    public String buildId;
    public GetImages200ApplicationJsonImages withBuildId(String buildId) {
        this.buildId = buildId;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public GetImages200ApplicationJsonImages withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("created_from")
    public GetImages200ApplicationJsonImagesCreatedFrom createdFrom;
    public GetImages200ApplicationJsonImages withCreatedFrom(GetImages200ApplicationJsonImagesCreatedFrom createdFrom) {
        this.createdFrom = createdFrom;
        return this;
    }
    @JsonProperty("deleted")
    public String deleted;
    public GetImages200ApplicationJsonImages withDeleted(String deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonProperty("deprecated")
    public String deprecated;
    public GetImages200ApplicationJsonImages withDeprecated(String deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetImages200ApplicationJsonImages withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("disk_size")
    public Double diskSize;
    public GetImages200ApplicationJsonImages withDiskSize(Double diskSize) {
        this.diskSize = diskSize;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetImages200ApplicationJsonImages withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("image_size")
    public Double imageSize;
    public GetImages200ApplicationJsonImages withImageSize(Double imageSize) {
        this.imageSize = imageSize;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GetImages200ApplicationJsonImages withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetImages200ApplicationJsonImages withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("os_flavor")
    public GetImages200ApplicationJsonImagesOsFlavorEnum osFlavor;
    public GetImages200ApplicationJsonImages withOsFlavor(GetImages200ApplicationJsonImagesOsFlavorEnum osFlavor) {
        this.osFlavor = osFlavor;
        return this;
    }
    @JsonProperty("os_version")
    public String osVersion;
    public GetImages200ApplicationJsonImages withOsVersion(String osVersion) {
        this.osVersion = osVersion;
        return this;
    }
    @JsonProperty("protection")
    public GetImages200ApplicationJsonImagesProtection protection;
    public GetImages200ApplicationJsonImages withProtection(GetImages200ApplicationJsonImagesProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rapid_deploy")
    public Boolean rapidDeploy;
    public GetImages200ApplicationJsonImages withRapidDeploy(Boolean rapidDeploy) {
        this.rapidDeploy = rapidDeploy;
        return this;
    }
    @JsonProperty("status")
    public GetImages200ApplicationJsonImagesStatusEnum status;
    public GetImages200ApplicationJsonImages withStatus(GetImages200ApplicationJsonImagesStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("type")
    public GetImages200ApplicationJsonImagesTypeEnum type;
    public GetImages200ApplicationJsonImages withType(GetImages200ApplicationJsonImagesTypeEnum type) {
        this.type = type;
        return this;
    }
}