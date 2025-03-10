/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * FilesetRestoreFileJobConfig - Configuration for job to restore a file or folder from a fileset backup.
 */
public class FilesetRestoreFileJobConfig {
    /**
     * Destination directory.
     */
    @JsonProperty("destinationDir")
    public String destinationDir;

    public FilesetRestoreFileJobConfig withDestinationDir(String destinationDir) {
        this.destinationDir = destinationDir;
        return this;
    }
    
    /**
     * Optional field to determine if we should ignore single error during restore. Default value is false.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignoreErrors")
    public Boolean ignoreErrors;

    public FilesetRestoreFileJobConfig withIgnoreErrors(Boolean ignoreErrors) {
        this.ignoreErrors = ignoreErrors;
        return this;
    }
    
    /**
     * Source directory to restore from.
     */
    @JsonProperty("sourceDir")
    public String sourceDir;

    public FilesetRestoreFileJobConfig withSourceDir(String sourceDir) {
        this.sourceDir = sourceDir;
        return this;
    }
    
    public FilesetRestoreFileJobConfig(@JsonProperty("destinationDir") String destinationDir, @JsonProperty("sourceDir") String sourceDir) {
        this.destinationDir = destinationDir;
        this.sourceDir = sourceDir;
  }
}
