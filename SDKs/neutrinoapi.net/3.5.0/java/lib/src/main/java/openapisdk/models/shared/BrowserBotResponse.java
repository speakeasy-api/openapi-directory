package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BrowserBotResponse {
    @JsonProperty("content")
    public String content;
    public BrowserBotResponse withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonProperty("elements")
    public String[] elements;
    public BrowserBotResponse withElements(String[] elements) {
        this.elements = elements;
        return this;
    }
    @JsonProperty("errorMessage")
    public String errorMessage;
    public BrowserBotResponse withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonProperty("execResults")
    public String[] execResults;
    public BrowserBotResponse withExecResults(String[] execResults) {
        this.execResults = execResults;
        return this;
    }
    @JsonProperty("httpRedirectUrl")
    public String httpRedirectUrl;
    public BrowserBotResponse withHttpRedirectUrl(String httpRedirectUrl) {
        this.httpRedirectUrl = httpRedirectUrl;
        return this;
    }
    @JsonProperty("httpStatusCode")
    public Integer httpStatusCode;
    public BrowserBotResponse withHttpStatusCode(Integer httpStatusCode) {
        this.httpStatusCode = httpStatusCode;
        return this;
    }
    @JsonProperty("httpStatusMessage")
    public String httpStatusMessage;
    public BrowserBotResponse withHttpStatusMessage(String httpStatusMessage) {
        this.httpStatusMessage = httpStatusMessage;
        return this;
    }
    @JsonProperty("isError")
    public Boolean isError;
    public BrowserBotResponse withIsError(Boolean isError) {
        this.isError = isError;
        return this;
    }
    @JsonProperty("isHttpOk")
    public Boolean isHttpOk;
    public BrowserBotResponse withIsHttpOk(Boolean isHttpOk) {
        this.isHttpOk = isHttpOk;
        return this;
    }
    @JsonProperty("isHttpRedirect")
    public Boolean isHttpRedirect;
    public BrowserBotResponse withIsHttpRedirect(Boolean isHttpRedirect) {
        this.isHttpRedirect = isHttpRedirect;
        return this;
    }
    @JsonProperty("isSecure")
    public Boolean isSecure;
    public BrowserBotResponse withIsSecure(Boolean isSecure) {
        this.isSecure = isSecure;
        return this;
    }
    @JsonProperty("isTimeout")
    public Boolean isTimeout;
    public BrowserBotResponse withIsTimeout(Boolean isTimeout) {
        this.isTimeout = isTimeout;
        return this;
    }
    @JsonProperty("languageCode")
    public String languageCode;
    public BrowserBotResponse withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonProperty("loadTime")
    public Double loadTime;
    public BrowserBotResponse withLoadTime(Double loadTime) {
        this.loadTime = loadTime;
        return this;
    }
    @JsonProperty("mimeType")
    public String mimeType;
    public BrowserBotResponse withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonProperty("responseHeaders")
    public java.util.Map<String, String> responseHeaders;
    public BrowserBotResponse withResponseHeaders(java.util.Map<String, String> responseHeaders) {
        this.responseHeaders = responseHeaders;
        return this;
    }
    @JsonProperty("securityDetails")
    public java.util.Map<String, String> securityDetails;
    public BrowserBotResponse withSecurityDetails(java.util.Map<String, String> securityDetails) {
        this.securityDetails = securityDetails;
        return this;
    }
    @JsonProperty("serverIp")
    public String serverIp;
    public BrowserBotResponse withServerIp(String serverIp) {
        this.serverIp = serverIp;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public BrowserBotResponse withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public BrowserBotResponse withUrl(String url) {
        this.url = url;
        return this;
    }
}