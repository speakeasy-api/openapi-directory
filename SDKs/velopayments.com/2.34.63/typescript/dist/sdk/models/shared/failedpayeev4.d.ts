import { SpeakeasyBase } from "../../../internal/utils";
import { ChallengeV4 } from "./challengev4";
import { CompanyV4 } from "./companyv4";
import { CreateIndividualV4 } from "./createindividualv4";
import { CreatePayeeAddressV4 } from "./createpayeeaddressv4";
import { CreatePaymentChannelV4 } from "./createpaymentchannelv4";
import { PayeePayorRefV4 } from "./payeepayorrefv4";
export declare class FailedPayeeV4 extends SpeakeasyBase {
    address?: CreatePayeeAddressV4;
    /**
     * <p>Used to override the default challenge presented to the payee when they onboard</p>
     *
     * @remarks
     * <p>Not used after the payee has onboarded</p>
     *
     */
    challenge?: ChallengeV4;
    company?: CompanyV4;
    email?: string;
    individual?: CreateIndividualV4;
    /**
     * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
     *
     * @remarks
     * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
     *
     */
    language?: string;
    payeeId?: string;
    paymentChannel?: CreatePaymentChannelV4;
    payorRefs?: PayeePayorRefV4[];
    remoteId?: string;
    /**
     * Type of Payee. One of the following values: Individual, Company
     */
    type?: string;
}
