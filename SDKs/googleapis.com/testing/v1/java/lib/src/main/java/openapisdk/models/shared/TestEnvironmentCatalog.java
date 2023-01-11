package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestEnvironmentCatalog
 * A description of a test environment.
**/
public class TestEnvironmentCatalog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidDeviceCatalog")
    public AndroidDeviceCatalog androidDeviceCatalog;
    public TestEnvironmentCatalog withAndroidDeviceCatalog(AndroidDeviceCatalog androidDeviceCatalog) {
        this.androidDeviceCatalog = androidDeviceCatalog;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceIpBlockCatalog")
    public DeviceIpBlockCatalog deviceIpBlockCatalog;
    public TestEnvironmentCatalog withDeviceIpBlockCatalog(DeviceIpBlockCatalog deviceIpBlockCatalog) {
        this.deviceIpBlockCatalog = deviceIpBlockCatalog;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosDeviceCatalog")
    public IosDeviceCatalog iosDeviceCatalog;
    public TestEnvironmentCatalog withIosDeviceCatalog(IosDeviceCatalog iosDeviceCatalog) {
        this.iosDeviceCatalog = iosDeviceCatalog;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkConfigurationCatalog")
    public NetworkConfigurationCatalog networkConfigurationCatalog;
    public TestEnvironmentCatalog withNetworkConfigurationCatalog(NetworkConfigurationCatalog networkConfigurationCatalog) {
        this.networkConfigurationCatalog = networkConfigurationCatalog;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softwareCatalog")
    public ProvidedSoftwareCatalog softwareCatalog;
    public TestEnvironmentCatalog withSoftwareCatalog(ProvidedSoftwareCatalog softwareCatalog) {
        this.softwareCatalog = softwareCatalog;
        return this;
    }
}