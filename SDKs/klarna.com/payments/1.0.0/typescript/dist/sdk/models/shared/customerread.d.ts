import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Organization entity type. Only applicable for B2B customers.
 */
export declare enum CustomerReadOrganizationEntityTypeEnum {
    LimitedCompany = "LIMITED_COMPANY",
    PublicLimitedCompany = "PUBLIC_LIMITED_COMPANY",
    EntrepreneurialCompany = "ENTREPRENEURIAL_COMPANY",
    LimitedPartnershipLimitedCompany = "LIMITED_PARTNERSHIP_LIMITED_COMPANY",
    LimitedPartnership = "LIMITED_PARTNERSHIP",
    GeneralPartnership = "GENERAL_PARTNERSHIP",
    RegisteredSoleTrader = "REGISTERED_SOLE_TRADER",
    SoleTrader = "SOLE_TRADER",
    CivilLawPartnership = "CIVIL_LAW_PARTNERSHIP",
    PublicInstitution = "PUBLIC_INSTITUTION",
    Other = "OTHER"
}
export declare class CustomerRead extends SpeakeasyBase {
    /**
     * Customer’s date of birth. The format is ‘yyyy-mm-dd’
     */
    dateOfBirth?: string;
    /**
     * Customer’s gender - ‘male’ or ‘female’
     */
    gender?: string;
    /**
     * Organization entity type. Only applicable for B2B customers.
     */
    organizationEntityType?: CustomerReadOrganizationEntityTypeEnum;
    /**
     * Organization registration id. Only applicable for B2B customers.
     */
    organizationRegistrationId?: string;
    /**
     * Customer’s Title. Allowed values per country:
     *
     * @remarks
     * UK - "Mr", "Ms"
     * DE - "Herr", "Frau"
     * AT: "Herr, "Frau"
     * CH: de-CH: "Herr, "Frau" it-CH: "Sig.", "Sig.ra" fr-CH: "M", "Mme"
     * BE: "Dhr.", "Mevr."
     * NL: "Dhr.", "Mevr."
     */
    title?: string;
    /**
     * Type of customer in the session. If nothing is added, a B2C session will be the default. If it is a b2b-session, you should enter organization to trigger a B2B session.
     */
    type?: string;
    /**
     * VAT ID. Only applicable for B2B customers.
     */
    vatId?: string;
}
