import { SpeakeasyBase } from "../../../internal/utils";
import { Meta } from "./meta";
import { ErrorT } from "./error";
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
    requestId: string;
    resp: RequestReference;
    timestamp: Date;
    transactionId: string;
}
