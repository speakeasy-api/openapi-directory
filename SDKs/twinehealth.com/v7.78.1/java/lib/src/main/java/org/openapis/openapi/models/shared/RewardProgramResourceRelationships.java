/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RewardProgramResourceRelationships {
    @JsonProperty("group")
    public RewardProgramResourceRelationshipsGroup group;

    public RewardProgramResourceRelationships withGroup(RewardProgramResourceRelationshipsGroup group) {
        this.group = group;
        return this;
    }
    
    public RewardProgramResourceRelationships(@JsonProperty("group") RewardProgramResourceRelationshipsGroup group) {
        this.group = group;
  }
}
