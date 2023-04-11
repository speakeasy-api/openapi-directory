import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";
import { ShareProfileAcknowledgement } from "./shareprofileacknowledgement";
export declare class ShareProfileResult extends SpeakeasyBase {
    acknowledgement: ShareProfileAcknowledgement;
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
