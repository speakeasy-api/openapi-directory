package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Datasource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Datasource withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public Datasource withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Datasource withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Datasource withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runParameters")
    public DatasourceRunParameters runParameters;
    public Datasource withRunParameters(DatasourceRunParameters runParameters) {
        this.runParameters = runParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public DatasourceType type;
    public Datasource withType(DatasourceType type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTimeout")
    public Long updateTimeout;
    public Datasource withUpdateTimeout(Long updateTimeout) {
        this.updateTimeout = updateTimeout;
        return this;
    }
}