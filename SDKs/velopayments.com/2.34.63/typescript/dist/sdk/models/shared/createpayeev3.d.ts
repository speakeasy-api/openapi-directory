import { SpeakeasyBase } from "../../../internal/utils";
import { ChallengeV3 } from "./challengev3";
import { CompanyV3 } from "./companyv3";
import { CreateIndividualV3 } from "./createindividualv3";
import { CreatePayeeAddressV3 } from "./createpayeeaddressv3";
import { CreatePaymentChannelV3 } from "./createpaymentchannelv3";
export declare class CreatePayeeV3Input extends SpeakeasyBase {
    address: CreatePayeeAddressV3;
    challenge?: ChallengeV3;
    company?: CompanyV3;
    email: string;
    individual?: CreateIndividualV3;
    /**
     * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
     *
     * @remarks
     * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
     *
     */
    language?: string;
    paymentChannel?: CreatePaymentChannelV3;
    remoteId: string;
    /**
     * Type of Payee. One of the following values: Individual, Company
     */
    type: string;
}
