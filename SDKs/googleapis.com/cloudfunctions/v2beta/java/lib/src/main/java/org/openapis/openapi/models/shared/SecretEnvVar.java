/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SecretEnvVar - Configuration for a secret environment variable. It has the information necessary to fetch the secret value from secret manager and expose it as an environment variable.
 */
public class SecretEnvVar {
    /**
     * Name of the environment variable.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;

    public SecretEnvVar withKey(String key) {
        this.key = key;
        return this;
    }
    
    /**
     * Project identifier (preferably project number but can also be the project ID) of the project that contains the secret. If not set, it is assumed that the secret is in the same project as the function.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;

    public SecretEnvVar withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    
    /**
     * Name of the secret in secret manager (not the full resource name).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;

    public SecretEnvVar withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    
    /**
     * Version of the secret (version number or the string 'latest'). It is recommended to use a numeric version for secret environment variables as any updates to the secret value is not reflected until new instances start.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;

    public SecretEnvVar withVersion(String version) {
        this.version = version;
        return this;
    }
    
    public SecretEnvVar(){}
}
