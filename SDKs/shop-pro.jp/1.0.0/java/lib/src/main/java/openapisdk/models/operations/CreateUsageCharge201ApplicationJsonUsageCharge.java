package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateUsageCharge201ApplicationJsonUsageCharge {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateUsageCharge201ApplicationJsonUsageCharge withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CreateUsageCharge201ApplicationJsonUsageCharge withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("make_date")
    public Long makeDate;
    public CreateUsageCharge201ApplicationJsonUsageCharge withMakeDate(Long makeDate) {
        this.makeDate = makeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("point")
    public Long point;
    public CreateUsageCharge201ApplicationJsonUsageCharge withPoint(Long point) {
        this.point = point;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("update_date")
    public Long updateDate;
    public CreateUsageCharge201ApplicationJsonUsageCharge withUpdateDate(Long updateDate) {
        this.updateDate = updateDate;
        return this;
    }
}