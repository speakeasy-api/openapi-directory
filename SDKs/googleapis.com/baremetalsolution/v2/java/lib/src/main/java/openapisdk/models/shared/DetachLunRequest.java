package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DetachLunRequest
 * Message for detach specific LUN from an Instance.
**/
public class DetachLunRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lun")
    public String lun;
    public DetachLunRequest withLun(String lun) {
        this.lun = lun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipReboot")
    public Boolean skipReboot;
    public DetachLunRequest withSkipReboot(Boolean skipReboot) {
        this.skipReboot = skipReboot;
        return this;
    }
}