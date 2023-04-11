import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Document country
 */
export declare enum CreateCheckInputCountryEnum {
    All = "ALL",
    Br = "BR",
    Cl = "CL",
    Co = "CO",
    Cr = "CR",
    Ec = "EC",
    Mx = "MX",
    Pe = "PE",
    Ar = "AR"
}
/**
 * Region where the background is to be checked in addition to the region where the person is from. By default, background checks in Brazil are performed in the region where the person is from. Required for Brazil only. Allowed values are: DF: Distrito Federal, AC: Acre, AL: Alagoas, AP: Amapá, AM: Amazonas, BA: Bahía, CE: Ceará, ES: Espírito Santo, GO: Goiás, MA: Maranhão, MT: Mato Grosso, MS: Mato Grosso do Sul, MG: Minas Gerais, PA: Pará, PB: Paraíba, PR: Paraná, PE: Pernambuco, PI: Piauí, RJ: Río de Janeiro, RN: Río Grande do Norte, RS: Río Grande do Sul, RO: Rondônia, RR: Roraima, SC: Santa Catarina, SP: São Paulo, SE: Sergipe, TO : Tocantins.
 */
export declare enum CreateCheckInputRegionEnum {
    Df = "DF",
    Ac = "AC",
    Al = "AL",
    Ap = "AP",
    Am = "AM",
    Ba = "BA",
    Ce = "CE",
    Es = "ES",
    Go = "GO",
    Ma = "MA",
    Mt = "MT",
    Ms = "MS",
    Mg = "MG",
    Pa = "PA",
    Pb = "PB",
    Pr = "PR",
    Pe = "PE",
    Pi = "PI",
    Rj = "RJ",
    Rn = "RN",
    Rs = "RS",
    Ro = "RO",
    Rr = "RR",
    Sc = "SC",
    Sp = "SP",
    Se = "SE",
    To = "TO"
}
/**
 * Background check type
 */
export declare enum CreateCheckInputTypeEnum {
    Person = "person",
    Vehicle = "vehicle",
    Company = "company",
    CustomTypeName = "custom_type_name"
}
/**
 * Represents paramaters required to create a background check
 */
export declare class CreateCheckInput extends SpeakeasyBase {
    /**
     * Person birth certificate
     */
    birthCertificate?: string;
    /**
     * Company name "Don't forget this required field to complete background checks in Brazil"
     */
    companyName?: string;
    /**
     * Document country
     */
    country: CreateCheckInputCountryEnum;
    /**
     * Person birthdate. This date is used to get some additional information about a person and to filter homonyms in some cases. YYYY-MM-DD format, Required for complete background checks in Brazil
     */
    dateOfBirth?: Date;
    /**
     * Diplomatic ID
     */
    diplomaticId?: string;
    /**
     * Driver's license number
     */
    driverLicense?: string;
    /**
     * Colombian escrow
     */
    escrow?: string;
    /**
     * Person or entity first name. If the document type and number are not provided, the report might include homonyms. Required when searching by first name, Required in order to get complete background checks in Brazil
     */
    firstName?: string;
    /**
     * Forces a new background check creation when true. Reuses recently created background checks otherwise
     */
    forceCreation?: boolean;
    /**
     * Person foreign ID
     */
    foreignId?: string;
    /**
     * Person document issue date in "YYYY-mm-dd" format (e.g. 2008-12-31) . This date is used to get some additional information about a person in some cases
     */
    issueDate?: Date;
    /**
     * Person or entity last name. If the document type and number are not provided, the report might include homonyms. Required when searching by last name. Required in order to get complete background checks in Brazil
     */
    lastName?: string;
    /**
     * Vehicle license plate
     */
    licensePlate?: string;
    /**
     * National ID
     */
    nationalId?: string;
    /**
     * Country of birth
     */
    nativeCountry?: string;
    /**
     * National ID of the vehicle owner
     */
    ownerDocumentId?: string;
    /**
     * National ID, foreign ID, or tax ID
     */
    ownerDocumentType?: string;
    /**
     * Person passport
     */
    passport?: string;
    /**
     * Payment day of a vehicle circulation permit (Chile only)
     */
    paymentDate?: Date;
    /**
     * ID for Venezuelans working in Colombia
     */
    pep?: string;
    /**
     * Person phone number. Required by law to notify the person their background is being checked
     */
    phoneNumber?: string;
    /**
     * Professional ID card
     */
    professionalCard?: string;
    /**
     * ID for Venezuelans working in Peru
     */
    ptp?: string;
    /**
     * Region where the background is to be checked in addition to the region where the person is from. By default, background checks in Brazil are performed in the region where the person is from. Required for Brazil only. Allowed values are: DF: Distrito Federal, AC: Acre, AL: Alagoas, AP: Amapá, AM: Amazonas, BA: Bahía, CE: Ceará, ES: Espírito Santo, GO: Goiás, MA: Maranhão, MT: Mato Grosso, MS: Mato Grosso do Sul, MG: Minas Gerais, PA: Pará, PB: Paraíba, PR: Paraná, PE: Pernambuco, PI: Piauí, RJ: Río de Janeiro, RN: Río Grande do Norte, RS: Río Grande do Sul, RO: Rondônia, RR: Roraima, SC: Santa Catarina, SP: São Paulo, SE: Sergipe, TO : Tocantins.
     */
    region?: CreateCheckInputRegionEnum;
    /**
     * Report ID the background check will be inserted into
     */
    reportId?: string;
    /**
     *  Used for the RG (Registro Geral) identification in Brazil. This identification has different formats according to the state that issues the document. It can have numbers and letters but other characters (- * , . ) are omitted, Required in order to get complete background checks in Brazil
     */
    stateId?: string;
    /**
     * Company ID used for tax payments
     */
    taxId?: string;
    /**
     * Background check type
     */
    type: CreateCheckInputTypeEnum;
    /**
     * Indicates whether the person subject to the validation authorized the validation. Must be true in order to proceed [Required for API key V1 or later]
     */
    userAuthorized?: boolean;
    /**
     * Vehicle license plate
     */
    vehicleId?: string;
    /**
     * Verification code registered for criminal records in Peru only
     */
    verificationCode?: string;
    /**
     * Indicates whether the check score is to be periodically revised and its frequency. It can be daily, weekly, monthly, yearly or have a custom frequency written as a number accompanied by d: day, w: week, m: month, y: year for instance: 3d: every three days, 2w: every two weeks. Ignore this field if the check is only to be performed once
     */
    watch?: string;
}
