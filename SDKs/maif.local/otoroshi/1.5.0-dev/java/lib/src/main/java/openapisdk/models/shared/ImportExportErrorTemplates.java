package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ImportExportErrorTemplates
 * Error templates for a service descriptor
**/
public class ImportExportErrorTemplates {
    @JsonProperty("messages")
    public java.util.Map<String, String> messages;
    public ImportExportErrorTemplates withMessages(java.util.Map<String, String> messages) {
        this.messages = messages;
        return this;
    }
    @JsonProperty("serviceId")
    public String serviceId;
    public ImportExportErrorTemplates withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @JsonProperty("template40x")
    public String template40x;
    public ImportExportErrorTemplates withTemplate40x(String template40x) {
        this.template40x = template40x;
        return this;
    }
    @JsonProperty("template50x")
    public String template50x;
    public ImportExportErrorTemplates withTemplate50x(String template50x) {
        this.template50x = template50x;
        return this;
    }
    @JsonProperty("templateBuild")
    public String templateBuild;
    public ImportExportErrorTemplates withTemplateBuild(String templateBuild) {
        this.templateBuild = templateBuild;
        return this;
    }
    @JsonProperty("templateMaintenance")
    public String templateMaintenance;
    public ImportExportErrorTemplates withTemplateMaintenance(String templateMaintenance) {
        this.templateMaintenance = templateMaintenance;
        return this;
    }
}