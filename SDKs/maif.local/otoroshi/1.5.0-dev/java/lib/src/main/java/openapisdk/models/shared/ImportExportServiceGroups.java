package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImportExportServiceGroups
 * An Otoroshi service group is just a group of service descriptor. It is useful to be able to define Api Keys for the whole group
**/
public class ImportExportServiceGroups {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ImportExportServiceGroups withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ImportExportServiceGroups withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ImportExportServiceGroups withName(String name) {
        this.name = name;
        return this;
    }
}