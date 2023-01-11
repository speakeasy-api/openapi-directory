package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Domain {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Exportable")
    public Boolean exportable;
    public Domain withExportable(Boolean exportable) {
        this.exportable = exportable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public Domain withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Domain withName(String name) {
        this.name = name;
        return this;
    }
}