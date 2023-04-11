import { SpeakeasyBase } from "../../../internal/utils";
import { ChallengeV4 } from "./challengev4";
import { CompanyV4 } from "./companyv4";
import { IndividualV4 } from "./individualv4";
import { PayeeAddressV4 } from "./payeeaddressv4";
import { PayeePayorRefV4 } from "./payeepayorrefv4";
/**
 * Success response, request completed okay
 */
export declare class PayeeDetailResponseV4 extends SpeakeasyBase {
    /**
     * The timestamp when the payee last accepted T&Cs
     */
    acceptTermsAndConditionsTimestamp?: Date;
    address?: PayeeAddressV4;
    cellphoneNumber?: string;
    /**
     * <p>Used to override the default challenge presented to the payee when they onboard</p>
     *
     * @remarks
     * <p>Not used after the payee has onboarded</p>
     *
     */
    challenge?: ChallengeV4;
    company?: CompanyV4;
    country?: string;
    created?: Date;
    disabled?: boolean;
    disabledComment?: string;
    disabledUpdatedTimestamp?: Date;
    displayName?: string;
    email?: string;
    enhancedKycCompleted?: boolean;
    gracePeriodEndDate?: Date;
    individual?: IndividualV4;
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
     * Payee onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED
     */
    onboardedStatus?: string;
    pausePayment?: boolean;
    pausePaymentTimestamp?: string;
    payeeId?: string;
    /**
     * Type of Payee. One of the following values: Individual, Company
     */
    payeeType?: string;
    payorRefs?: PayeePayorRefV4[];
    watchlistOverrideComment?: string;
    watchlistOverrideExpiresAtTimestamp?: Date;
    /**
     * Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED
     */
    watchlistStatus?: string;
    watchlistStatusUpdatedTimestamp?: string;
}
