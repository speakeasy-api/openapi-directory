import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConsentRequestStatusRequest extends SpeakeasyBase {
    consentRequestId: string;
    /**
     * a nonce, unique for each HTTP request
     */
    requestId: string;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
