import { SpeakeasyBase } from "../../../internal/utils";
import { ShareProfileAcknowledgement } from "./shareprofileacknowledgement";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";
export declare class ShareProfileResult extends SpeakeasyBase {
    acknowledgement: ShareProfileAcknowledgement;
    error?: ErrorT;
    requestId: string;
    resp: RequestReference;
    timestamp: Date;
}
