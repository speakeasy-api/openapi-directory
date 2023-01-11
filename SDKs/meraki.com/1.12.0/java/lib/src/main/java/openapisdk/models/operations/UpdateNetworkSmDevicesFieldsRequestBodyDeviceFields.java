package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields
 * The new fields of the device. Each field of this object is optional.
**/
public class UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields withNotes(String notes) {
        this.notes = notes;
        return this;
    }
}