package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProvidedSoftwareCatalog
 * The currently provided software environment on the devices under test.
**/
public class ProvidedSoftwareCatalog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidxOrchestratorVersion")
    public String androidxOrchestratorVersion;
    public ProvidedSoftwareCatalog withAndroidxOrchestratorVersion(String androidxOrchestratorVersion) {
        this.androidxOrchestratorVersion = androidxOrchestratorVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orchestratorVersion")
    public String orchestratorVersion;
    public ProvidedSoftwareCatalog withOrchestratorVersion(String orchestratorVersion) {
        this.orchestratorVersion = orchestratorVersion;
        return this;
    }
}