import { SpeakeasyBase } from "../../../internal/utils";
import { PatientAuthPurposeEnum } from "./patientauthpurposeenum";
import { PatientAuthRequester } from "./patientauthrequester";
export declare class AccessTokenValidity extends SpeakeasyBase {
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    expiry: Date;
    /**
     * number of times, the token can be used
     */
    limit: number;
    /**
     * what is the purpose of user auth
     */
    purpose: PatientAuthPurposeEnum;
    /**
     * identification of requester
     */
    requester: PatientAuthRequester;
}
