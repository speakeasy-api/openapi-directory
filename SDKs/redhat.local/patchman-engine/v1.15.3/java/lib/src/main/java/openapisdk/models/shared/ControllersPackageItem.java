package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ControllersPackageItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ControllersPackageItem withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public String summary;
    public ControllersPackageItem withSummary(String summary) {
        this.summary = summary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("systems_installed")
    public Long systemsInstalled;
    public ControllersPackageItem withSystemsInstalled(Long systemsInstalled) {
        this.systemsInstalled = systemsInstalled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("systems_updatable")
    public Long systemsUpdatable;
    public ControllersPackageItem withSystemsUpdatable(Long systemsUpdatable) {
        this.systemsUpdatable = systemsUpdatable;
        return this;
    }
}