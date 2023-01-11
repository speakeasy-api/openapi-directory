package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserAgentInfoRequestBody {
    @SpeakeasyMetadata("form:name=output-case")
    public UserAgentInfoRequestBodyOutputCaseEnum outputCase;
    public UserAgentInfoRequestBody withOutputCase(UserAgentInfoRequestBodyOutputCaseEnum outputCase) {
        this.outputCase = outputCase;
        return this;
    }
    @SpeakeasyMetadata("form:name=user-agent")
    public String userAgent;
    public UserAgentInfoRequestBody withUserAgent(String userAgent) {
        this.userAgent = userAgent;
        return this;
    }
}