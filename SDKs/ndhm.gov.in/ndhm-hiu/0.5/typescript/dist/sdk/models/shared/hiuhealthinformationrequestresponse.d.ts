import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";
export declare enum HIUHealthInformationRequestResponseHiRequestSessionStatusEnum {
    Requested = "REQUESTED",
    Acknowledged = "ACKNOWLEDGED"
}
export declare class HIUHealthInformationRequestResponseHiRequest extends SpeakeasyBase {
    sessionStatus: HIUHealthInformationRequestResponseHiRequestSessionStatusEnum;
    transactionId: string;
}
export declare class HIUHealthInformationRequestResponse extends SpeakeasyBase {
    error?: ErrorT;
    hiRequest?: HIUHealthInformationRequestResponseHiRequest;
    requestId: string;
    resp: RequestReference;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
