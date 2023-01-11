package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TokenPayloadExternal
 * Contains basic app information and integrity signals like device attestation and licensing details.
**/
public class TokenPayloadExternal {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountDetails")
    public AccountDetails accountDetails;
    public TokenPayloadExternal withAccountDetails(AccountDetails accountDetails) {
        this.accountDetails = accountDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appIntegrity")
    public AppIntegrity appIntegrity;
    public TokenPayloadExternal withAppIntegrity(AppIntegrity appIntegrity) {
        this.appIntegrity = appIntegrity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceIntegrity")
    public DeviceIntegrity deviceIntegrity;
    public TokenPayloadExternal withDeviceIntegrity(DeviceIntegrity deviceIntegrity) {
        this.deviceIntegrity = deviceIntegrity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestDetails")
    public RequestDetails requestDetails;
    public TokenPayloadExternal withRequestDetails(RequestDetails requestDetails) {
        this.requestDetails = requestDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testingDetails")
    public TestingDetails testingDetails;
    public TokenPayloadExternal withTestingDetails(TestingDetails testingDetails) {
        this.testingDetails = testingDetails;
        return this;
    }
}