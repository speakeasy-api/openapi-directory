package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BaseInfoAttributes
 * Attributes for Base URL Info endpoint
**/
public class BaseInfoAttributes {
    @JsonProperty("api_version")
    public String apiVersion;
    public BaseInfoAttributes withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @JsonProperty("available_api_versions")
    public AvailableApiVersion[] availableApiVersions;
    public BaseInfoAttributes withAvailableApiVersions(AvailableApiVersion[] availableApiVersions) {
        this.availableApiVersions = availableApiVersions;
        return this;
    }
    @JsonProperty("available_endpoints")
    public String[] availableEndpoints;
    public BaseInfoAttributes withAvailableEndpoints(String[] availableEndpoints) {
        this.availableEndpoints = availableEndpoints;
        return this;
    }
    @JsonProperty("entry_types_by_format")
    public java.util.Map<String, String[]> entryTypesByFormat;
    public BaseInfoAttributes withEntryTypesByFormat(java.util.Map<String, String[]> entryTypesByFormat) {
        this.entryTypesByFormat = entryTypesByFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formats")
    public String[] formats;
    public BaseInfoAttributes withFormats(String[] formats) {
        this.formats = formats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_index")
    public Boolean isIndex;
    public BaseInfoAttributes withIsIndex(Boolean isIndex) {
        this.isIndex = isIndex;
        return this;
    }
}