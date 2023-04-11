import { SpeakeasyBase } from "../../../internal/utils";
import { RegulationEnumEndUserTypeEnum } from "./regulationenumendusertypeenum";
/**
 * OK
 */
export declare class NumbersV2RegulatoryComplianceRegulation extends SpeakeasyBase {
    endUserType?: RegulationEnumEndUserTypeEnum;
    /**
     * A human-readable description that is assigned to describe the Regulation resource. Examples can include Germany: Mobile - Business.
     */
    friendlyName?: string;
    /**
     * The ISO country code of the phone number's country.
     */
    isoCountry?: string;
    /**
     * The type of phone number restricted by the regulatory requirement. For example, Germany mobile phone numbers provisioned by businesses require a business name with commercial register proof from the Handelsregisterauszug and a proof of address from Handelsregisterauszug or a trade license by Gewerbeanmeldung.
     */
    numberType?: string;
    /**
     * The SID of an object that holds the regulatory information of the phone number country, phone number type, and end user type.
     */
    requirements?: any;
    /**
     * The unique string that identifies the Regulation resource.
     */
    sid?: string;
    /**
     * The absolute URL of the Regulation resource.
     */
    url?: string;
}
