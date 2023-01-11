package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Entrypoint
 * The entrypoint for the application.
**/
public class Entrypoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shell")
    public String shell;
    public Entrypoint withShell(String shell) {
        this.shell = shell;
        return this;
    }
}