package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DataType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public DataTypeField[] field;
    public DataType withField(DataTypeField[] field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DataType withName(String name) {
        this.name = name;
        return this;
    }
}