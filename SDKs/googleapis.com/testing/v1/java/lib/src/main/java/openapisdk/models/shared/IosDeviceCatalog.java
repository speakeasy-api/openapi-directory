package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IosDeviceCatalog
 * The currently supported iOS devices.
**/
public class IosDeviceCatalog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("models")
    public IosModel[] models;
    public IosDeviceCatalog withModels(IosModel[] models) {
        this.models = models;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtimeConfiguration")
    public IosRuntimeConfiguration runtimeConfiguration;
    public IosDeviceCatalog withRuntimeConfiguration(IosRuntimeConfiguration runtimeConfiguration) {
        this.runtimeConfiguration = runtimeConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versions")
    public IosVersion[] versions;
    public IosDeviceCatalog withVersions(IosVersion[] versions) {
        this.versions = versions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xcodeVersions")
    public XcodeVersion[] xcodeVersions;
    public IosDeviceCatalog withXcodeVersions(XcodeVersion[] xcodeVersions) {
        this.xcodeVersions = xcodeVersions;
        return this;
    }
}