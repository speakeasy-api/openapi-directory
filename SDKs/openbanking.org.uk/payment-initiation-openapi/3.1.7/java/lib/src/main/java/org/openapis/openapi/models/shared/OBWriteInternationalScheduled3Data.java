/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OBWriteInternationalScheduled3Data {
    /**
     * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
     */
    @JsonProperty("ConsentId")
    public String consentId;

    public OBWriteInternationalScheduled3Data withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    
    /**
     * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.
     */
    @JsonProperty("Initiation")
    public OBWriteInternationalScheduled3DataInitiation initiation;

    public OBWriteInternationalScheduled3Data withInitiation(OBWriteInternationalScheduled3DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
    
    public OBWriteInternationalScheduled3Data(@JsonProperty("ConsentId") String consentId, @JsonProperty("Initiation") OBWriteInternationalScheduled3DataInitiation initiation) {
        this.consentId = consentId;
        this.initiation = initiation;
  }
}
