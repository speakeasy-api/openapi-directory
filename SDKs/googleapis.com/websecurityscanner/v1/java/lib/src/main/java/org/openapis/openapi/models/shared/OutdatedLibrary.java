/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OutdatedLibrary - Information reported for an outdated library.
 */
public class OutdatedLibrary {
    /**
     * URLs to learn more information about the vulnerabilities in the library.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("learnMoreUrls")
    public String[] learnMoreUrls;

    public OutdatedLibrary withLearnMoreUrls(String[] learnMoreUrls) {
        this.learnMoreUrls = learnMoreUrls;
        return this;
    }
    
    /**
     * The name of the outdated library.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("libraryName")
    public String libraryName;

    public OutdatedLibrary withLibraryName(String libraryName) {
        this.libraryName = libraryName;
        return this;
    }
    
    /**
     * The version number.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;

    public OutdatedLibrary withVersion(String version) {
        this.version = version;
        return this;
    }
    
    public OutdatedLibrary(){}
}
