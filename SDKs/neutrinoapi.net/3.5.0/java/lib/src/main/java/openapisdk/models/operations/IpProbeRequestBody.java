package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpProbeRequestBody {
    @SpeakeasyMetadata("form:name=ip")
    public String ip;
    public IpProbeRequestBody withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @SpeakeasyMetadata("form:name=output-case")
    public IpProbeRequestBodyOutputCaseEnum outputCase;
    public IpProbeRequestBody withOutputCase(IpProbeRequestBodyOutputCaseEnum outputCase) {
        this.outputCase = outputCase;
        return this;
    }
}