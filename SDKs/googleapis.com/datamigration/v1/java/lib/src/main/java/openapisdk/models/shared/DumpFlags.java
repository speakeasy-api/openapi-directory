package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DumpFlags
 * Dump flags definition.
**/
public class DumpFlags {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dumpFlags")
    public DumpFlag[] dumpFlags;
    public DumpFlags withDumpFlags(DumpFlag[] dumpFlags) {
        this.dumpFlags = dumpFlags;
        return this;
    }
}