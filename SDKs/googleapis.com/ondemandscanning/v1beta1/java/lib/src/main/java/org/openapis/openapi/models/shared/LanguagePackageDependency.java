/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LanguagePackageDependency - Indicates a language package available between this package and the customer's resource artifact.
 */
public class LanguagePackageDependency {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("package")
    public String package_;

    public LanguagePackageDependency withPackage(String package_) {
        this.package_ = package_;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;

    public LanguagePackageDependency withVersion(String version) {
        this.version = version;
        return this;
    }
    
    public LanguagePackageDependency(){}
}
