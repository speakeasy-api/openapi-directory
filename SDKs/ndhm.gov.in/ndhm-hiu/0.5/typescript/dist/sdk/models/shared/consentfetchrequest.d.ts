import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConsentFetchRequest extends SpeakeasyBase {
    consentId: string;
    /**
     * a nonce, unique for each HTTP request
     */
    requestId: string;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
