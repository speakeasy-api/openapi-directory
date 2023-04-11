import { SpeakeasyBase } from "../../../internal/utils";
import { PatientAuthPurposeEnum } from "./patientauthpurposeenum";
export declare enum PatientAuthModeQueryRequestQueryRequesterTypeEnum {
    Hip = "HIP",
    Hiu = "HIU"
}
export declare class PatientAuthModeQueryRequestQueryRequester extends SpeakeasyBase {
    id: string;
    type: PatientAuthModeQueryRequestQueryRequesterTypeEnum;
}
export declare class PatientAuthModeQueryRequestQuery extends SpeakeasyBase {
    id: string;
    /**
     * what is the purpose of user auth
     */
    purpose: PatientAuthPurposeEnum;
    requester: PatientAuthModeQueryRequestQueryRequester;
}
export declare class PatientAuthModeQueryRequest extends SpeakeasyBase {
    query: PatientAuthModeQueryRequestQuery;
    /**
     * a nonce, unique for each HTTP request
     */
    requestId: string;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
