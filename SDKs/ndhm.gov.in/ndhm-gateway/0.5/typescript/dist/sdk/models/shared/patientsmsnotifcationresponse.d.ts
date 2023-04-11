import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";
export declare enum PatientSMSNotifcationResponseStatusEnum {
    Acknowledged = "ACKNOWLEDGED",
    Errored = "ERRORED"
}
export declare class PatientSMSNotifcationResponse extends SpeakeasyBase {
    error?: ErrorT;
    /**
     * a nonce, unique for each HTTP request
     */
    requestId: string;
    resp: RequestReference;
    status?: PatientSMSNotifcationResponseStatusEnum;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
