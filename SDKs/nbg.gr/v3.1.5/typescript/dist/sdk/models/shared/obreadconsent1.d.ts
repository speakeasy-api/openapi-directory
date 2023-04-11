import { SpeakeasyBase } from "../../../internal/utils";
import { OBReadData1 } from "./obreaddata1";
/**
 * Default
 */
export declare class OBReadConsent1 extends SpeakeasyBase {
    data: OBReadData1;
    /**
     * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.
     */
    risk: Record<string, any>;
}
