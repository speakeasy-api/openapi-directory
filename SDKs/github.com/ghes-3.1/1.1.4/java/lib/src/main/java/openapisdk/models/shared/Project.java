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
 * Project
 * Projects are a way to organize columns and cards of work.
**/
public class Project {
    @JsonProperty("body")
    public String body;
    public Project withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonProperty("columns_url")
    public String columnsUrl;
    public Project withColumnsUrl(String columnsUrl) {
        this.columnsUrl = columnsUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Project withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("creator")
    public ProjectSimpleUser creator;
    public Project withCreator(ProjectSimpleUser creator) {
        this.creator = creator;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public Project withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public Project withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Project withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public Project withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("number")
    public Long number;
    public Project withNumber(Long number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_permission")
    public ProjectOrganizationPermissionEnum organizationPermission;
    public Project withOrganizationPermission(ProjectOrganizationPermissionEnum organizationPermission) {
        this.organizationPermission = organizationPermission;
        return this;
    }
    @JsonProperty("owner_url")
    public String ownerUrl;
    public Project withOwnerUrl(String ownerUrl) {
        this.ownerUrl = ownerUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private")
    public Boolean private_;
    public Project withPrivate(Boolean private_) {
        this.private_ = private_;
        return this;
    }
    @JsonProperty("state")
    public String state;
    public Project withState(String state) {
        this.state = state;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public Project withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public Project withUrl(String url) {
        this.url = url;
        return this;
    }
}