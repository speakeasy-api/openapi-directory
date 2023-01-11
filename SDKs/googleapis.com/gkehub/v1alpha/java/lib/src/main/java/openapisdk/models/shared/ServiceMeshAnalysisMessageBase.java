package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceMeshAnalysisMessageBase
 * AnalysisMessageBase describes some common information that is needed for all messages.
**/
public class ServiceMeshAnalysisMessageBase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentationUrl")
    public String documentationUrl;
    public ServiceMeshAnalysisMessageBase withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public ServiceMeshAnalysisMessageBaseLevelEnum level;
    public ServiceMeshAnalysisMessageBase withLevel(ServiceMeshAnalysisMessageBaseLevelEnum level) {
        this.level = level;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ServiceMeshType type;
    public ServiceMeshAnalysisMessageBase withType(ServiceMeshType type) {
        this.type = type;
        return this;
    }
}