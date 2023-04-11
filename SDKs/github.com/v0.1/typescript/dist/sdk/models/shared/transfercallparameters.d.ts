import { SpeakeasyBase } from "../../../internal/utils";
/**
 * POST parameters
 */
export declare class TransferCallParameters extends SpeakeasyBase {
    /**
     * Unique identifier of the call
     */
    callUUID: string;
    /**
     * Absolute URL which will return the updated RestXML flow
     */
    url: string;
}
