package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Connector
 * Connectors indicates a specific connector type, e.x. Salesforce, SAP etc.
**/
public class Connector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Connector withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Connector withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Connector withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentationUri")
    public String documentationUri;
    public Connector withDocumentationUri(String documentationUri) {
        this.documentationUri = documentationUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalUri")
    public String externalUri;
    public Connector withExternalUri(String externalUri) {
        this.externalUri = externalUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Connector withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchStage")
    public ConnectorLaunchStageEnum launchStage;
    public Connector withLaunchStage(ConnectorLaunchStageEnum launchStage) {
        this.launchStage = launchStage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Connector withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Connector withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webAssetsLocation")
    public String webAssetsLocation;
    public Connector withWebAssetsLocation(String webAssetsLocation) {
        this.webAssetsLocation = webAssetsLocation;
        return this;
    }
}