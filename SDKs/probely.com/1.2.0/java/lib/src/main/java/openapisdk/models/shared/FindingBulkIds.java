package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FindingBulkIds {
    @JsonProperty("ids")
    public String[] ids;
    public FindingBulkIds withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
}