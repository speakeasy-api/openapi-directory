import { SpeakeasyBase } from "../../../internal/utils";
import { ChallengeV3 } from "./challengev3";
import { CompanyV3 } from "./companyv3";
import { IndividualV3 } from "./individualv3";
import { PayeeAddressV3 } from "./payeeaddressv3";
import { PayeePayorRefV3 } from "./payeepayorrefv3";
/**
 * Success response, request completed okay
 */
export declare class PayeeDetailResponseV3 extends SpeakeasyBase {
    /**
     * The timestamp when the payee last accepted T&Cs
     */
    acceptTermsAndConditionsTimestamp?: Date;
    address?: PayeeAddressV3;
    cellphoneNumber?: string;
    challenge?: ChallengeV3;
    company?: CompanyV3;
    /**
     * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
     */
    country?: string;
    created?: Date;
    disabled?: boolean;
    disabledComment?: string;
    disabledUpdatedTimestamp?: Date;
    displayName?: string;
    email?: string;
    enhancedKycCompleted?: boolean;
    gracePeriodEndDate?: Date;
    individual?: IndividualV3;
    kycCompletedTimestamp?: string;
    /**
     * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
     *
     * @remarks
     * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
     *
     */
    language?: string;
    marketingOptInDecision?: boolean;
    marketingOptInTimestamp?: string;
    /**
     * Onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED
     */
    onboardedStatus?: string;
    pausePayment?: boolean;
    pausePaymentTimestamp?: string;
    payeeId?: string;
    /**
     * Type of Payee. One of the following values: Individual, Company
     */
    payeeType?: string;
    payorRefs?: PayeePayorRefV3[];
    watchlistOverrideComment?: string;
    watchlistOverrideExpiresAtTimestamp?: Date;
    /**
     * Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED
     */
    watchlistStatus?: string;
    watchlistStatusUpdatedTimestamp?: string;
}
