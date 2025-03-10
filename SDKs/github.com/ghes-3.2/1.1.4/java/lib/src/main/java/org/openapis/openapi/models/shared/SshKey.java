/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class SshKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;

    public SshKey withKey(String key) {
        this.key = key;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pretty-print")
    public String prettyPrint;

    public SshKey withPrettyPrint(String prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    
    public SshKey(){}
}
