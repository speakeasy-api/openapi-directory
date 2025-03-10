/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StaticFilesHandler - Files served directly to the user for a given URL, such as images, CSS stylesheets, or JavaScript source files. Static file handlers describe which files in the application directory are static files, and which URLs serve them.
 */
public class StaticFilesHandler {
    /**
     * Whether files should also be uploaded as code data. By default, files declared in static file handlers are uploaded as static data and are only served to end users; they cannot be read by the application. If enabled, uploads are charged against both your code and static data storage resource quotas.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationReadable")
    public Boolean applicationReadable;

    public StaticFilesHandler withApplicationReadable(Boolean applicationReadable) {
        this.applicationReadable = applicationReadable;
        return this;
    }
    
    /**
     * Time a static file served by this handler should be cached by web proxies and browsers.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiration")
    public String expiration;

    public StaticFilesHandler withExpiration(String expiration) {
        this.expiration = expiration;
        return this;
    }
    
    /**
     * HTTP headers to use for all responses from these URLs.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpHeaders")
    public java.util.Map<String, String> httpHeaders;

    public StaticFilesHandler withHttpHeaders(java.util.Map<String, String> httpHeaders) {
        this.httpHeaders = httpHeaders;
        return this;
    }
    
    /**
     * MIME type used to serve all files served by this handler.Defaults to file-specific MIME types, which are derived from each file's filename extension.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;

    public StaticFilesHandler withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    
    /**
     * Path to the static files matched by the URL pattern, from the application root directory. The path can refer to text matched in groupings in the URL pattern.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;

    public StaticFilesHandler withPath(String path) {
        this.path = path;
        return this;
    }
    
    /**
     * Whether this handler should match the request if the file referenced by the handler does not exist.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requireMatchingFile")
    public Boolean requireMatchingFile;

    public StaticFilesHandler withRequireMatchingFile(Boolean requireMatchingFile) {
        this.requireMatchingFile = requireMatchingFile;
        return this;
    }
    
    /**
     * Regular expression that matches the file paths for all files that should be referenced by this handler.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploadPathRegex")
    public String uploadPathRegex;

    public StaticFilesHandler withUploadPathRegex(String uploadPathRegex) {
        this.uploadPathRegex = uploadPathRegex;
        return this;
    }
    
    public StaticFilesHandler(){}
}
