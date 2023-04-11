import { SpeakeasyBase } from "../../../internal/utils";
import { ChallengeV3 } from "./challengev3";
import { CompanyV3 } from "./companyv3";
import { IndividualV3Input } from "./individualv3";
import { PayeeAddressV3 } from "./payeeaddressv3";
import { PayeeTypeEnumEnum } from "./payeetypeenumenum";
/**
 * Request to update payee details
 */
export declare class UpdatePayeeDetailsRequestV3Input extends SpeakeasyBase {
    address?: PayeeAddressV3;
    challenge?: ChallengeV3;
    company?: CompanyV3;
    email?: string;
    individual?: IndividualV3Input;
    /**
     * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
     *
     * @remarks
     * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
     *
     */
    language?: string;
    /**
     * The type of the payee
     */
    payeeType?: PayeeTypeEnumEnum;
}
