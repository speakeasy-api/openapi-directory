package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataTypeField
 * In case of multi-dimensional data (such as an accelerometer with x, y, and z axes) each field represents one dimension. Each data type field has a unique name which identifies it. The field also defines the format of the data (int, float, etc.). This message is only instantiated in code and not used for wire comms or stored in any way.
**/
public class DataTypeField {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public DataTypeFieldFormatEnum format;
    public DataTypeField withFormat(DataTypeFieldFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DataTypeField withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optional")
    public Boolean optional;
    public DataTypeField withOptional(Boolean optional) {
        this.optional = optional;
        return this;
    }
}