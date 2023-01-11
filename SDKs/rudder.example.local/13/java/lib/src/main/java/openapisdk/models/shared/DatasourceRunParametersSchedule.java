package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatasourceRunParametersSchedule
 * Configure if data source should be fetch periodically
**/
public class DatasourceRunParametersSchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public DatasourceRunParametersScheduleTypeEnum type;
    public DatasourceRunParametersSchedule withType(DatasourceRunParametersScheduleTypeEnum type) {
        this.type = type;
        return this;
    }
}