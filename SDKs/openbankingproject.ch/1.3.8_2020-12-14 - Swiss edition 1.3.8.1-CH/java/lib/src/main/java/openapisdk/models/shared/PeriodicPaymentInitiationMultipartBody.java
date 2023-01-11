package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * PeriodicPaymentInitiationMultipartBody
 * The multipart message definition for the initiation of a periodic payment initiation 
 * where the information of the payment is contained in a pain.001 message (Part 1) and 
 * the additional informations related to the periodic payment is an additional JSON message (Part 2).
 * 
**/
public class PeriodicPaymentInitiationMultipartBody {
    @SpeakeasyMetadata("multipartForm:name=json_standingorderType,json")
    public PeriodicPaymentInitiationXmlPart2StandingorderTypeJson jsonStandingorderType;
    public PeriodicPaymentInitiationMultipartBody withJsonStandingorderType(PeriodicPaymentInitiationXmlPart2StandingorderTypeJson jsonStandingorderType) {
        this.jsonStandingorderType = jsonStandingorderType;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=xml_sct,json")
    public Object xmlSct;
    public PeriodicPaymentInitiationMultipartBody withXmlSct(Object xmlSct) {
        this.xmlSct = xmlSct;
        return this;
    }
}