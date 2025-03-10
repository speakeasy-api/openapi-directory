/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VersionFile - A static content file that is part of a version.
 */
public class VersionFile {
    /**
     * The SHA256 content hash of the file.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hash")
    public String hash;

    public VersionFile withHash(String hash) {
        this.hash = hash;
        return this;
    }
    
    /**
     * The URI at which the file's content should display.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;

    public VersionFile withPath(String path) {
        this.path = path;
        return this;
    }
    
    /**
     * Output only. The current status of a particular file in the specified version. The value will be either `pending upload` or `uploaded`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public VersionFileStatusEnum status;

    public VersionFile withStatus(VersionFileStatusEnum status) {
        this.status = status;
        return this;
    }
    
    public VersionFile(){}
}
