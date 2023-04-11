import { SpeakeasyBase } from "../../../internal/utils";
import { ChallengeV4 } from "./challengev4";
import { CompanyV4 } from "./companyv4";
import { IndividualV4Input } from "./individualv4";
import { PayeeAddressV4 } from "./payeeaddressv4";
import { PayeeTypeEnumEnum } from "./payeetypeenumenum";
/**
 * Request to update payee details
 */
export declare class UpdatePayeeDetailsRequestV4Input extends SpeakeasyBase {
    address?: PayeeAddressV4;
    /**
     * <p>Used to override the default challenge presented to the payee when they onboard</p>
     *
     * @remarks
     * <p>Not used after the payee has onboarded</p>
     *
     */
    challenge?: ChallengeV4;
    company?: CompanyV4;
    /**
     * The phone number of a device that the payee wishes to receive sms messages on
     *
     * @remarks
     *
     */
    contactSmsNumber?: string;
    email?: string;
    individual?: IndividualV4Input;
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
