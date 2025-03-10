/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DependabotAddSelectedRepoToOrgSecretRequest {
    /**
     * The organization name. The name is not case sensitive.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;

    public DependabotAddSelectedRepoToOrgSecretRequest withOrg(String org) {
        this.org = org;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repository_id")
    public Long repositoryId;

    public DependabotAddSelectedRepoToOrgSecretRequest withRepositoryId(Long repositoryId) {
        this.repositoryId = repositoryId;
        return this;
    }
    
    /**
     * The name of the secret.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=secret_name")
    public String secretName;

    public DependabotAddSelectedRepoToOrgSecretRequest withSecretName(String secretName) {
        this.secretName = secretName;
        return this;
    }
    
    public DependabotAddSelectedRepoToOrgSecretRequest(@JsonProperty("org") String org, @JsonProperty("repository_id") Long repositoryId, @JsonProperty("secret_name") String secretName) {
        this.org = org;
        this.repositoryId = repositoryId;
        this.secretName = secretName;
  }
}
