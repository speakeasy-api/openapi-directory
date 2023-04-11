import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";
import { OBReadDataConsentResponse1 } from "./obreaddataconsentresponse1";
/**
 * Account Access Consents Created
 */
export declare class OBReadConsentResponse1 extends SpeakeasyBase {
    data: OBReadDataConsentResponse1;
    /**
     * Links relevant to the payload
     */
    links: Links;
    /**
     * Meta Data relevant to the payload
     */
    meta: Meta;
    /**
     * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.
     */
    risk: Record<string, any>;
}
