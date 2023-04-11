import { SpeakeasyBase } from "../../../internal/utils";
import { PayeeTypeEnumEnum } from "./payeetypeenumenum";
export declare class CreatePayeesCSVRequestV3 extends SpeakeasyBase {
    addressCity: string;
    /**
     * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
     */
    addressCountry: string;
    addressCountyOrProvince?: string;
    addressLine1: string;
    addressLine2?: string;
    addressLine3?: string;
    addressLine4?: string;
    addressZipOrPostcode: string;
    challengeDescription?: string;
    challengeValue?: string;
    companyEIN?: string;
    companyName?: string;
    companyOperatingName?: string;
    email: string;
    /**
     * Must not be date in future. Example - 1970-05-20
     */
    individualDateOfBirth?: Date;
    individualFirstName?: string;
    individualLastName?: string;
    individualNationalIdentification?: string;
    individualOtherNames?: string;
    individualTitle?: string;
    /**
     * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
     *
     * @remarks
     * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
     *
     */
    payeeLanguage?: string;
    paymentChannelAccountName?: string;
    /**
     * Either routing number and account number or only iban must be set
     */
    paymentChannelAccountNumber?: string;
    /**
     * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
     */
    paymentChannelCountryCode?: string;
    paymentChannelCurrency?: string;
    /**
     * Must match the regular expression ```^[A-Za-z0-9]+$```.
     */
    paymentChannelIban?: string;
    /**
     * Either routing number and account number or only iban must be set
     */
    paymentChannelRoutingNumber?: string;
    remoteId: string;
    /**
     * The type of the payee
     */
    type: PayeeTypeEnumEnum;
}
