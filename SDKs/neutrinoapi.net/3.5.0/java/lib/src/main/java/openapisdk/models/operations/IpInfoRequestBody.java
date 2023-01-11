package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpInfoRequestBody {
    @SpeakeasyMetadata("form:name=ip")
    public String ip;
    public IpInfoRequestBody withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @SpeakeasyMetadata("form:name=output-case")
    public IpInfoRequestBodyOutputCaseEnum outputCase;
    public IpInfoRequestBody withOutputCase(IpInfoRequestBodyOutputCaseEnum outputCase) {
        this.outputCase = outputCase;
        return this;
    }
    @SpeakeasyMetadata("form:name=reverse-lookup")
    public Boolean reverseLookup;
    public IpInfoRequestBody withReverseLookup(Boolean reverseLookup) {
        this.reverseLookup = reverseLookup;
        return this;
    }
}