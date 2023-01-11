package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatasourceType
 * Define and configure data source type.
**/
public class DatasourceType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public DatasourceTypeNameEnum name;
    public DatasourceType withName(DatasourceTypeNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public DatasourceTypeParameters parameters;
    public DatasourceType withParameters(DatasourceTypeParameters parameters) {
        this.parameters = parameters;
        return this;
    }
}