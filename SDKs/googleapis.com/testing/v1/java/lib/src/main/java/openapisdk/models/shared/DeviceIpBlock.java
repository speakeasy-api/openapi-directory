package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceIpBlock
 * A single device IP block
**/
public class DeviceIpBlock {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addedDate")
    public Date addedDate;
    public DeviceIpBlock withAddedDate(Date addedDate) {
        this.addedDate = addedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("block")
    public String block;
    public DeviceIpBlock withBlock(String block) {
        this.block = block;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form")
    public DeviceIpBlockFormEnum form;
    public DeviceIpBlock withForm(DeviceIpBlockFormEnum form) {
        this.form = form;
        return this;
    }
}