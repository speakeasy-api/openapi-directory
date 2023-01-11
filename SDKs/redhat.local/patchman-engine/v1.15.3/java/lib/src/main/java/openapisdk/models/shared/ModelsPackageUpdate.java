package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ModelsPackageUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advisory")
    public String advisory;
    public ModelsPackageUpdate withAdvisory(String advisory) {
        this.advisory = advisory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evra")
    public String evra;
    public ModelsPackageUpdate withEvra(String evra) {
        this.evra = evra;
        return this;
    }
}