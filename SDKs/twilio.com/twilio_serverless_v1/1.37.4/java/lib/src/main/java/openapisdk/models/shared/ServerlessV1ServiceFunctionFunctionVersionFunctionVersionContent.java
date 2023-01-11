package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ServerlessV1ServiceFunctionFunctionVersionFunctionVersionContent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ServerlessV1ServiceFunctionFunctionVersionFunctionVersionContent withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public ServerlessV1ServiceFunctionFunctionVersionFunctionVersionContent withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("function_sid")
    public String functionSid;
    public ServerlessV1ServiceFunctionFunctionVersionFunctionVersionContent withFunctionSid(String functionSid) {
        this.functionSid = functionSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_sid")
    public String serviceSid;
    public ServerlessV1ServiceFunctionFunctionVersionFunctionVersionContent withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ServerlessV1ServiceFunctionFunctionVersionFunctionVersionContent withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ServerlessV1ServiceFunctionFunctionVersionFunctionVersionContent withUrl(String url) {
        this.url = url;
        return this;
    }
}