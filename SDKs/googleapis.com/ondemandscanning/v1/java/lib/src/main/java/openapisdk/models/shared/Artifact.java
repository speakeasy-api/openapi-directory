package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Artifact
 * Artifact describes a build product.
**/
public class Artifact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checksum")
    public String checksum;
    public Artifact withChecksum(String checksum) {
        this.checksum = checksum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Artifact withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("names")
    public String[] names;
    public Artifact withNames(String[] names) {
        this.names = names;
        return this;
    }
}