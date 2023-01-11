package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ErrorTemplate
 * Error templates for a service descriptor
**/
public class ErrorTemplate {
    @JsonProperty("messages")
    public java.util.Map<String, String> messages;
    public ErrorTemplate withMessages(java.util.Map<String, String> messages) {
        this.messages = messages;
        return this;
    }
    @JsonProperty("serviceId")
    public String serviceId;
    public ErrorTemplate withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @JsonProperty("template40x")
    public String template40x;
    public ErrorTemplate withTemplate40x(String template40x) {
        this.template40x = template40x;
        return this;
    }
    @JsonProperty("template50x")
    public String template50x;
    public ErrorTemplate withTemplate50x(String template50x) {
        this.template50x = template50x;
        return this;
    }
    @JsonProperty("templateBuild")
    public String templateBuild;
    public ErrorTemplate withTemplateBuild(String templateBuild) {
        this.templateBuild = templateBuild;
        return this;
    }
    @JsonProperty("templateMaintenance")
    public String templateMaintenance;
    public ErrorTemplate withTemplateMaintenance(String templateMaintenance) {
        this.templateMaintenance = templateMaintenance;
        return this;
    }
}