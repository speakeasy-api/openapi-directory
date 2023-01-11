package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Nfs
 * Represents an NFS volume.
**/
public class Nfs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remotePath")
    public String remotePath;
    public Nfs withRemotePath(String remotePath) {
        this.remotePath = remotePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public String server;
    public Nfs withServer(String server) {
        this.server = server;
        return this;
    }
}