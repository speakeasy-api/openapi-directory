package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceRecord
 * A DNS resource record.
**/
public class ResourceRecord {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ResourceRecord withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rrdata")
    public String rrdata;
    public ResourceRecord withRrdata(String rrdata) {
        this.rrdata = rrdata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ResourceRecordTypeEnum type;
    public ResourceRecord withType(ResourceRecordTypeEnum type) {
        this.type = type;
        return this;
    }
}