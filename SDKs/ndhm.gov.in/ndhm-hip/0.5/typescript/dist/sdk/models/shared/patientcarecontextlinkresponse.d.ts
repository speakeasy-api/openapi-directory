import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";
export declare enum PatientCareContextLinkResponseAcknowledgementStatusEnum {
    Success = "SUCCESS"
}
export declare class PatientCareContextLinkResponseAcknowledgement extends SpeakeasyBase {
    status: PatientCareContextLinkResponseAcknowledgementStatusEnum;
}
export declare class PatientCareContextLinkResponse extends SpeakeasyBase {
    acknowledgement?: PatientCareContextLinkResponseAcknowledgement;
    error?: ErrorT;
    requestId: string;
    resp: RequestReference;
    timestamp: Date;
}
