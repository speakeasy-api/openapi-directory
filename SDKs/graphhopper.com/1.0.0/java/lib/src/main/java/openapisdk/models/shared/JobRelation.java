package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class JobRelation {
    @JsonProperty("ids")
    public String[] ids;
    public JobRelation withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public JobRelation withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vehicle_id")
    public String vehicleId;
    public JobRelation withVehicleId(String vehicleId) {
        this.vehicleId = vehicleId;
        return this;
    }
}