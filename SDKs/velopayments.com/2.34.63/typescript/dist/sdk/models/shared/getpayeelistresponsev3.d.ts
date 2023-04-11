import { SpeakeasyBase } from "../../../internal/utils";
import { GetPayeeListResponseCompanyV3 } from "./getpayeelistresponsecompanyv3";
import { GetPayeeListResponseIndividualV3 } from "./getpayeelistresponseindividualv3";
import { PayeePayorRefV3 } from "./payeepayorrefv3";
export declare class GetPayeeListResponseV3 extends SpeakeasyBase {
    company?: GetPayeeListResponseCompanyV3;
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
    individual?: GetPayeeListResponseIndividualV3;
    /**
     * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
     *
     * @remarks
     * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
     *
     */
    language?: string;
    /**
     * Onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED
     */
    onboardedStatus?: string;
    payeeId?: string;
    /**
     * Type of Payee. One of the following values: Individual, Company
     */
    payeeType?: string;
    payorRefs?: PayeePayorRefV3[];
    watchlistOverrideComment?: string;
    /**
     * Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED
     */
    watchlistStatus?: string;
    watchlistStatusUpdatedTimestamp?: string;
}
