package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpBlocklistDownloadRequestBody {
    @SpeakeasyMetadata("form:name=format")
    public String format;
    public IpBlocklistDownloadRequestBody withFormat(String format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("form:name=include-vpn")
    public Boolean includeVpn;
    public IpBlocklistDownloadRequestBody withIncludeVpn(Boolean includeVpn) {
        this.includeVpn = includeVpn;
        return this;
    }
}