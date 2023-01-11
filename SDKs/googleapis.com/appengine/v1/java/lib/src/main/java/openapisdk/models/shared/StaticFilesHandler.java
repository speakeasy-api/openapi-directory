package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StaticFilesHandler
 * Files served directly to the user for a given URL, such as images, CSS stylesheets, or JavaScript source files. Static file handlers describe which files in the application directory are static files, and which URLs serve them.
**/
public class StaticFilesHandler {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationReadable")
    public Boolean applicationReadable;
    public StaticFilesHandler withApplicationReadable(Boolean applicationReadable) {
        this.applicationReadable = applicationReadable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiration")
    public String expiration;
    public StaticFilesHandler withExpiration(String expiration) {
        this.expiration = expiration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpHeaders")
    public java.util.Map<String, String> httpHeaders;
    public StaticFilesHandler withHttpHeaders(java.util.Map<String, String> httpHeaders) {
        this.httpHeaders = httpHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public StaticFilesHandler withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public StaticFilesHandler withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requireMatchingFile")
    public Boolean requireMatchingFile;
    public StaticFilesHandler withRequireMatchingFile(Boolean requireMatchingFile) {
        this.requireMatchingFile = requireMatchingFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploadPathRegex")
    public String uploadPathRegex;
    public StaticFilesHandler withUploadPathRegex(String uploadPathRegex) {
        this.uploadPathRegex = uploadPathRegex;
        return this;
    }
}