import { SpeakeasyBase } from "../../../internal/utils";
import { ConsentArtefactReference } from "./consentartefactreference";
import { ConsentStatusEnum } from "./consentstatusenum";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";
export declare class HIUConsentRequestStatusConsentRequest extends SpeakeasyBase {
    consentArtefacts: ConsentArtefactReference[];
    id: string;
    status: ConsentStatusEnum;
}
export declare class HIUConsentRequestStatus extends SpeakeasyBase {
    consentRequest?: HIUConsentRequestStatusConsentRequest;
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
