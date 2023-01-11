package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AndroidDeviceCatalog
 * The currently supported Android devices.
**/
public class AndroidDeviceCatalog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("models")
    public AndroidModel[] models;
    public AndroidDeviceCatalog withModels(AndroidModel[] models) {
        this.models = models;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtimeConfiguration")
    public AndroidRuntimeConfiguration runtimeConfiguration;
    public AndroidDeviceCatalog withRuntimeConfiguration(AndroidRuntimeConfiguration runtimeConfiguration) {
        this.runtimeConfiguration = runtimeConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versions")
    public AndroidVersion[] versions;
    public AndroidDeviceCatalog withVersions(AndroidVersion[] versions) {
        this.versions = versions;
        return this;
    }
}