package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PosixGroup
 * POSIX Group definition to represent a group in a POSIX compliant system.
**/
public class PosixGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public PosixGroup withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PosixGroup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("systemId")
    public String systemId;
    public PosixGroup withSystemId(String systemId) {
        this.systemId = systemId;
        return this;
    }
}