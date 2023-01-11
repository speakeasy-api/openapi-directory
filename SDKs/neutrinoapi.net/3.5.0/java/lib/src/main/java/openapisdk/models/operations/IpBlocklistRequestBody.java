package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpBlocklistRequestBody {
    @SpeakeasyMetadata("form:name=ip")
    public String ip;
    public IpBlocklistRequestBody withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @SpeakeasyMetadata("form:name=output-case")
    public IpBlocklistRequestBodyOutputCaseEnum outputCase;
    public IpBlocklistRequestBody withOutputCase(IpBlocklistRequestBodyOutputCaseEnum outputCase) {
        this.outputCase = outputCase;
        return this;
    }
    @SpeakeasyMetadata("form:name=vpn-lookup")
    public Boolean vpnLookup;
    public IpBlocklistRequestBody withVpnLookup(Boolean vpnLookup) {
        this.vpnLookup = vpnLookup;
        return this;
    }
}