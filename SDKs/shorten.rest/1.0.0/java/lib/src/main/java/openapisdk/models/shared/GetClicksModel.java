package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetClicksModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clicks")
    public ClickModel[] clicks;
    public GetClicksModel withClicks(ClickModel[] clicks) {
        this.clicks = clicks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastId")
    public String lastId;
    public GetClicksModel withLastId(String lastId) {
        this.lastId = lastId;
        return this;
    }
}