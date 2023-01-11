package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UrlInfoResponse {
    @JsonProperty("content")
    public String content;
    public UrlInfoResponse withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonProperty("contentEncoding")
    public String contentEncoding;
    public UrlInfoResponse withContentEncoding(String contentEncoding) {
        this.contentEncoding = contentEncoding;
        return this;
    }
    @JsonProperty("contentSize")
    public Integer contentSize;
    public UrlInfoResponse withContentSize(Integer contentSize) {
        this.contentSize = contentSize;
        return this;
    }
    @JsonProperty("contentType")
    public String contentType;
    public UrlInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonProperty("httpOk")
    public Boolean httpOk;
    public UrlInfoResponse withHttpOk(Boolean httpOk) {
        this.httpOk = httpOk;
        return this;
    }
    @JsonProperty("httpRedirect")
    public Boolean httpRedirect;
    public UrlInfoResponse withHttpRedirect(Boolean httpRedirect) {
        this.httpRedirect = httpRedirect;
        return this;
    }
    @JsonProperty("httpStatus")
    public Integer httpStatus;
    public UrlInfoResponse withHttpStatus(Integer httpStatus) {
        this.httpStatus = httpStatus;
        return this;
    }
    @JsonProperty("httpStatusMessage")
    public Integer httpStatusMessage;
    public UrlInfoResponse withHttpStatusMessage(Integer httpStatusMessage) {
        this.httpStatusMessage = httpStatusMessage;
        return this;
    }
    @JsonProperty("isError")
    public Boolean isError;
    public UrlInfoResponse withIsError(Boolean isError) {
        this.isError = isError;
        return this;
    }
    @JsonProperty("isTimeout")
    public Boolean isTimeout;
    public UrlInfoResponse withIsTimeout(Boolean isTimeout) {
        this.isTimeout = isTimeout;
        return this;
    }
    @JsonProperty("languageCode")
    public String languageCode;
    public UrlInfoResponse withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonProperty("loadTime")
    public Double loadTime;
    public UrlInfoResponse withLoadTime(Double loadTime) {
        this.loadTime = loadTime;
        return this;
    }
    @JsonProperty("query")
    public java.util.Map<String, String> query;
    public UrlInfoResponse withQuery(java.util.Map<String, String> query) {
        this.query = query;
        return this;
    }
    @JsonProperty("real")
    public Boolean real;
    public UrlInfoResponse withReal(Boolean real) {
        this.real = real;
        return this;
    }
    @JsonProperty("serverCity")
    public String serverCity;
    public UrlInfoResponse withServerCity(String serverCity) {
        this.serverCity = serverCity;
        return this;
    }
    @JsonProperty("serverCountry")
    public String serverCountry;
    public UrlInfoResponse withServerCountry(String serverCountry) {
        this.serverCountry = serverCountry;
        return this;
    }
    @JsonProperty("serverCountryCode")
    public String serverCountryCode;
    public UrlInfoResponse withServerCountryCode(String serverCountryCode) {
        this.serverCountryCode = serverCountryCode;
        return this;
    }
    @JsonProperty("serverHostname")
    public String serverHostname;
    public UrlInfoResponse withServerHostname(String serverHostname) {
        this.serverHostname = serverHostname;
        return this;
    }
    @JsonProperty("serverIp")
    public String serverIp;
    public UrlInfoResponse withServerIp(String serverIp) {
        this.serverIp = serverIp;
        return this;
    }
    @JsonProperty("serverName")
    public String serverName;
    public UrlInfoResponse withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
    @JsonProperty("serverRegion")
    public String serverRegion;
    public UrlInfoResponse withServerRegion(String serverRegion) {
        this.serverRegion = serverRegion;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public UrlInfoResponse withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public UrlInfoResponse withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonProperty("urlPath")
    public String urlPath;
    public UrlInfoResponse withUrlPath(String urlPath) {
        this.urlPath = urlPath;
        return this;
    }
    @JsonProperty("urlPort")
    public Integer urlPort;
    public UrlInfoResponse withUrlPort(Integer urlPort) {
        this.urlPort = urlPort;
        return this;
    }
    @JsonProperty("urlProtocol")
    public String urlProtocol;
    public UrlInfoResponse withUrlProtocol(String urlProtocol) {
        this.urlProtocol = urlProtocol;
        return this;
    }
    @JsonProperty("valid")
    public Boolean valid;
    public UrlInfoResponse withValid(Boolean valid) {
        this.valid = valid;
        return this;
    }
}