import { SpeakeasyBase } from "../../../internal/utils";
export declare class PayeeDeltaV3 extends SpeakeasyBase {
    dbaName?: string;
    displayName?: string;
    email?: string;
    /**
     * Onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED
     */
    onboardedStatus?: string;
    payeeCountry?: string;
    payeeId: string;
    remoteId: string;
}
