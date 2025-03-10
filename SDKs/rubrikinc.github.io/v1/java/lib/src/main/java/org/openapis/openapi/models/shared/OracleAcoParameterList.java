/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OracleAcoParameterList - List of supported Advanced Cloning Options (ACO) parameters.
 */
public class OracleAcoParameterList {
    /**
     * An array that contains the supported Advanced Cloning Options (ACO) parameters.
     */
    @JsonProperty("parameters")
    public String[] parameters;

    public OracleAcoParameterList withParameters(String[] parameters) {
        this.parameters = parameters;
        return this;
    }
    
    public OracleAcoParameterList(@JsonProperty("parameters") String[] parameters) {
        this.parameters = parameters;
  }
}
