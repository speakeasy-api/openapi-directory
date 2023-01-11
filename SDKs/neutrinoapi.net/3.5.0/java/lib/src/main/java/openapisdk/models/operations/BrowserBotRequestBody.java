package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BrowserBotRequestBody {
    @SpeakeasyMetadata("form:name=delay")
    public Integer delay;
    public BrowserBotRequestBody withDelay(Integer delay) {
        this.delay = delay;
        return this;
    }
    @SpeakeasyMetadata("form:name=exec")
    public String[] exec;
    public BrowserBotRequestBody withExec(String[] exec) {
        this.exec = exec;
        return this;
    }
    @SpeakeasyMetadata("form:name=ignore-certificate-errors")
    public Boolean ignoreCertificateErrors;
    public BrowserBotRequestBody withIgnoreCertificateErrors(Boolean ignoreCertificateErrors) {
        this.ignoreCertificateErrors = ignoreCertificateErrors;
        return this;
    }
    @SpeakeasyMetadata("form:name=output-case")
    public BrowserBotRequestBodyOutputCaseEnum outputCase;
    public BrowserBotRequestBody withOutputCase(BrowserBotRequestBodyOutputCaseEnum outputCase) {
        this.outputCase = outputCase;
        return this;
    }
    @SpeakeasyMetadata("form:name=selector")
    public String selector;
    public BrowserBotRequestBody withSelector(String selector) {
        this.selector = selector;
        return this;
    }
    @SpeakeasyMetadata("form:name=timeout")
    public Integer timeout;
    public BrowserBotRequestBody withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
    @SpeakeasyMetadata("form:name=url")
    public String url;
    public BrowserBotRequestBody withUrl(String url) {
        this.url = url;
        return this;
    }
    @SpeakeasyMetadata("form:name=user-agent")
    public String userAgent;
    public BrowserBotRequestBody withUserAgent(String userAgent) {
        this.userAgent = userAgent;
        return this;
    }
}