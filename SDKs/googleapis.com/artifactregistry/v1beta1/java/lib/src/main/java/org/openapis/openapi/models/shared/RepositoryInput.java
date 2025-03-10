/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RepositoryInput - A Repository for storing artifacts with a specific format.
 */
public class RepositoryInput {
    /**
     * The user-provided description of the repository.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public RepositoryInput withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * The format of packages that are stored in the repository.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public RepositoryFormatEnum format;

    public RepositoryInput withFormat(RepositoryFormatEnum format) {
        this.format = format;
        return this;
    }
    
    /**
     * The Cloud KMS resource name of the customer managed encryption key that's used to encrypt the contents of the Repository. Has the form: `projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`. This value may not be changed after the Repository has been created.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyName")
    public String kmsKeyName;

    public RepositoryInput withKmsKeyName(String kmsKeyName) {
        this.kmsKeyName = kmsKeyName;
        return this;
    }
    
    /**
     * Labels with user-defined metadata. This field may contain up to 64 entries. Label keys and values may be no longer than 63 characters. Label keys must begin with a lowercase letter and may only contain lowercase letters, numeric characters, underscores, and dashes.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;

    public RepositoryInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    
    /**
     * The name of the repository, for example: "projects/p1/locations/us-central1/repositories/repo1".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public RepositoryInput withName(String name) {
        this.name = name;
        return this;
    }
    
    public RepositoryInput(){}
}
