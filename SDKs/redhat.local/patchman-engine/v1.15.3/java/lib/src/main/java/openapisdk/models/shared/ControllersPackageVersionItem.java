package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ControllersPackageVersionItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evra")
    public String evra;
    public ControllersPackageVersionItem withEvra(String evra) {
        this.evra = evra;
        return this;
    }
}