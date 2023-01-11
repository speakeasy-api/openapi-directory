package openapisdk.models.operations;



public class ToolresultsProjectsInitializeSettingsResponse {
    public String contentType;
    public ToolresultsProjectsInitializeSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProjectSettings projectSettings;
    public ToolresultsProjectsInitializeSettingsResponse withProjectSettings(openapisdk.models.shared.ProjectSettings projectSettings) {
        this.projectSettings = projectSettings;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsInitializeSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}