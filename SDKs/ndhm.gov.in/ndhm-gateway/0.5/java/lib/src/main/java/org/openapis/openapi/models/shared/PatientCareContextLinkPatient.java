/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PatientCareContextLinkPatient {
    @JsonProperty("careContexts")
    public CareContextRepresentation[] careContexts;

    public PatientCareContextLinkPatient withCareContexts(CareContextRepresentation[] careContexts) {
        this.careContexts = careContexts;
        return this;
    }
    
    @JsonProperty("display")
    public String display;

    public PatientCareContextLinkPatient withDisplay(String display) {
        this.display = display;
        return this;
    }
    
    /**
     * patient reference id at HIP
     */
    @JsonProperty("referenceNumber")
    public String referenceNumber;

    public PatientCareContextLinkPatient withReferenceNumber(String referenceNumber) {
        this.referenceNumber = referenceNumber;
        return this;
    }
    
    public PatientCareContextLinkPatient(@JsonProperty("careContexts") CareContextRepresentation[] careContexts, @JsonProperty("display") String display, @JsonProperty("referenceNumber") String referenceNumber) {
        this.careContexts = careContexts;
        this.display = display;
        this.referenceNumber = referenceNumber;
  }
}
