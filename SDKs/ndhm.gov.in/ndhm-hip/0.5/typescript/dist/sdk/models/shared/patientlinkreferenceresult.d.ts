import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Meta } from "./meta";
import { RequestReference } from "./requestreference";
export declare enum PatientLinkReferenceResultLinkAuthenticationTypeEnum {
    Direct = "DIRECT",
    Mediated = "MEDIATED"
}
export declare class PatientLinkReferenceResultLink extends SpeakeasyBase {
    authenticationType: PatientLinkReferenceResultLinkAuthenticationTypeEnum;
    meta?: Meta;
    referenceNumber: string;
}
export declare class PatientLinkReferenceResult extends SpeakeasyBase {
    error?: ErrorT;
    link?: PatientLinkReferenceResultLink;
    /**
     * a nonce, unique for each HTTP request
     */
    requestId: string;
    resp: RequestReference;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
    transactionId: string;
}
