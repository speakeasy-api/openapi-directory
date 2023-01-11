package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatasourceTypeParametersRequestMode
 * Configure the strategy used to query the HTTP data source.
**/
public class DatasourceTypeParametersRequestMode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public DatasourceTypeParametersRequestModeNameEnum name;
    public DatasourceTypeParametersRequestMode withName(DatasourceTypeParametersRequestModeNameEnum name) {
        this.name = name;
        return this;
    }
}