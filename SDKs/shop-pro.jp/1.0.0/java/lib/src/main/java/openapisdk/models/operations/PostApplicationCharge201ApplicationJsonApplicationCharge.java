package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostApplicationCharge201ApplicationJsonApplicationCharge {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PostApplicationCharge201ApplicationJsonApplicationCharge withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("make_date")
    public Long makeDate;
    public PostApplicationCharge201ApplicationJsonApplicationCharge withMakeDate(Long makeDate) {
        this.makeDate = makeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("point")
    public Long point;
    public PostApplicationCharge201ApplicationJsonApplicationCharge withPoint(Long point) {
        this.point = point;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("update_date")
    public Long updateDate;
    public PostApplicationCharge201ApplicationJsonApplicationCharge withUpdateDate(Long updateDate) {
        this.updateDate = updateDate;
        return this;
    }
}