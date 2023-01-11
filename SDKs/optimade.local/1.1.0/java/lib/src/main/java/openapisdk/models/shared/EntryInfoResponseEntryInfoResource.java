package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EntryInfoResponseEntryInfoResource
 * OPTIMADE information for an entry endpoint
**/
public class EntryInfoResponseEntryInfoResource {
    @JsonProperty("description")
    public String description;
    public EntryInfoResponseEntryInfoResource withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("formats")
    public String[] formats;
    public EntryInfoResponseEntryInfoResource withFormats(String[] formats) {
        this.formats = formats;
        return this;
    }
    @JsonProperty("output_fields_by_format")
    public java.util.Map<String, String[]> outputFieldsByFormat;
    public EntryInfoResponseEntryInfoResource withOutputFieldsByFormat(java.util.Map<String, String[]> outputFieldsByFormat) {
        this.outputFieldsByFormat = outputFieldsByFormat;
        return this;
    }
    @JsonProperty("properties")
    public java.util.Map<String, EntryInfoProperty> properties;
    public EntryInfoResponseEntryInfoResource withProperties(java.util.Map<String, EntryInfoProperty> properties) {
        this.properties = properties;
        return this;
    }
}