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
 * ImportExport
 * The structure that can be imported to or exported from Otoroshi. It represent the memory state of Otoroshi
**/
public class ImportExport {
    @JsonProperty("admins")
    public ImportExportAdmins[] admins;
    public ImportExport withAdmins(ImportExportAdmins[] admins) {
        this.admins = admins;
        return this;
    }
    @JsonProperty("apiKeys")
    public ImportExportApiKeys[] apiKeys;
    public ImportExport withApiKeys(ImportExportApiKeys[] apiKeys) {
        this.apiKeys = apiKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appConfig")
    public java.util.Map<String, String> appConfig;
    public ImportExport withAppConfig(java.util.Map<String, String> appConfig) {
        this.appConfig = appConfig;
        return this;
    }
    @JsonProperty("config")
    public GlobalConfig config;
    public ImportExport withConfig(GlobalConfig config) {
        this.config = config;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("date")
    public OffsetDateTime date;
    public ImportExport withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    @JsonProperty("dateRaw")
    public Long dateRaw;
    public ImportExport withDateRaw(Long dateRaw) {
        this.dateRaw = dateRaw;
        return this;
    }
    @JsonProperty("errorTemplates")
    public ImportExportErrorTemplates[] errorTemplates;
    public ImportExport withErrorTemplates(ImportExportErrorTemplates[] errorTemplates) {
        this.errorTemplates = errorTemplates;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public ImportExport withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("serviceDescriptors")
    public ImportExportServiceDescriptors[] serviceDescriptors;
    public ImportExport withServiceDescriptors(ImportExportServiceDescriptors[] serviceDescriptors) {
        this.serviceDescriptors = serviceDescriptors;
        return this;
    }
    @JsonProperty("serviceGroups")
    public ImportExportServiceGroups[] serviceGroups;
    public ImportExport withServiceGroups(ImportExportServiceGroups[] serviceGroups) {
        this.serviceGroups = serviceGroups;
        return this;
    }
    @JsonProperty("simpleAdmins")
    public ImportExportSimpleAdmins[] simpleAdmins;
    public ImportExport withSimpleAdmins(ImportExportSimpleAdmins[] simpleAdmins) {
        this.simpleAdmins = simpleAdmins;
        return this;
    }
    @JsonProperty("stats")
    public ImportExportStats stats;
    public ImportExport withStats(ImportExportStats stats) {
        this.stats = stats;
        return this;
    }
}