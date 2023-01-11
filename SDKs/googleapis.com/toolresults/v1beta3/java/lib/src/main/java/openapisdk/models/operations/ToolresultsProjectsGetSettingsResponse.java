package openapisdk.models.operations;



public class ToolresultsProjectsGetSettingsResponse {
    public String contentType;
    public ToolresultsProjectsGetSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProjectSettings projectSettings;
    public ToolresultsProjectsGetSettingsResponse withProjectSettings(openapisdk.models.shared.ProjectSettings projectSettings) {
        this.projectSettings = projectSettings;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsGetSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}