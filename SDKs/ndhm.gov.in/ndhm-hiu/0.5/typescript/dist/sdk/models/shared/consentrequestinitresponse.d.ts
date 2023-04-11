import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";
export declare class ConsentRequestInitResponseConsentRequest extends SpeakeasyBase {
    /**
     * id of the consent-request created
     */
    id: string;
}
export declare class ConsentRequestInitResponse extends SpeakeasyBase {
    consentRequest?: ConsentRequestInitResponseConsentRequest;
    error?: ErrorT;
    /**
     * a nonce, unique for each HTTP request
     */
    requestId: string;
    resp: RequestReference;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
