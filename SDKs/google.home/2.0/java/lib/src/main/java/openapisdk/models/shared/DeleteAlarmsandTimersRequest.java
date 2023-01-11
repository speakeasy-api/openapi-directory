package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteAlarmsandTimersRequest {
    @JsonProperty("ids")
    public String[] ids;
    public DeleteAlarmsandTimersRequest withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
}