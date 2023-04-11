import { SpeakeasyBase } from "../../../internal/utils";
import { GetPayeeListResponseCompanyV4 } from "./getpayeelistresponsecompanyv4";
import { GetPayeeListResponseIndividualV4 } from "./getpayeelistresponseindividualv4";
import { PayeePayorRefV4 } from "./payeepayorrefv4";
export declare class GetPayeeListResponseV4 extends SpeakeasyBase {
    company?: GetPayeeListResponseCompanyV4;
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
    individual?: GetPayeeListResponseIndividualV4;
    /**
     * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
     *
     * @remarks
     * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
     *
     */
    language?: string;
    /**
     * Payee onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED
     */
    onboardedStatus?: string;
    payeeId?: string;
    /**
     * Type of Payee. One of the following values: Individual, Company
     */
    payeeType?: string;
    payorRefs?: PayeePayorRefV4[];
    watchlistOverrideComment?: string;
    /**
     * Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED
     */
    watchlistStatus?: string;
    watchlistStatusUpdatedTimestamp?: string;
}
