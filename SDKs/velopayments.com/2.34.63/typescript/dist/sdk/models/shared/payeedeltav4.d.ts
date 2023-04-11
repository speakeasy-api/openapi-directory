import { SpeakeasyBase } from "../../../internal/utils";
export declare class PayeeDeltaV4 extends SpeakeasyBase {
    dbaName?: string;
    displayName?: string;
    email?: string;
    /**
     * Payee onboarded status. One of the following value: CREATED, INVITED, REGISTERED, ONBOARDED
     */
    onboardedStatus?: string;
    /**
     * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
     */
    payeeCountry?: string;
    payeeId: string;
    remoteId: string;
}
