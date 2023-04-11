import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The corporation's address.
 */
export declare class CreateAnEntityParametersCorporationAddress extends SpeakeasyBase {
    /**
     * The city of the address.
     */
    city: string;
    /**
     * The first line of the address. This is usually the street number and street.
     */
    line1: string;
    /**
     * The second line of the address. This might be the floor or room number.
     */
    line2?: string;
    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the state of the address.
     */
    state: string;
    /**
     * The ZIP code of the address.
     */
    zip: string;
}
/**
 * The individual's address.
 */
export declare class CreateAnEntityParametersCorporationBeneficialOwnersIndividualAddress extends SpeakeasyBase {
    /**
     * The city of the address.
     */
    city: string;
    /**
     * The first line of the address. This is usually the street number and street.
     */
    line1: string;
    /**
     * The second line of the address. This might be the floor or room number.
     */
    line2?: string;
    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the state of the address.
     */
    state: string;
    /**
     * The ZIP code of the address.
     */
    zip: string;
}
/**
 * Information about the United States driver's license used for identification. Required if `method` is equal to `drivers_license`.
 */
export declare class CreateAnEntityParametersCorporationBeneficialOwnersIndividualIdentificationDriversLicense extends SpeakeasyBase {
    /**
     * The driver's license's expiration date in YYYY-MM-DD format.
     */
    expirationDate: Date;
    /**
     * The identifier of the File containing the driver's license.
     */
    fileId: string;
    /**
     * The state that issued the provided driver's license.
     */
    state: string;
}
/**
 * A method that can be used to verify the individual's identity.
 */
export declare enum CreateAnEntityParametersCorporationBeneficialOwnersIndividualIdentificationMethodEnum {
    SocialSecurityNumber = "social_security_number",
    IndividualTaxpayerIdentificationNumber = "individual_taxpayer_identification_number",
    Passport = "passport",
    DriversLicense = "drivers_license",
    Other = "other"
}
/**
 * Information about the identification document provided. Required if `method` is equal to `other`.
 */
export declare class CreateAnEntityParametersCorporationBeneficialOwnersIndividualIdentificationOther extends SpeakeasyBase {
    /**
     * The two-character ISO 3166-1 code representing the country that issued the document.
     */
    country: string;
    /**
     * A description of the document submitted.
     */
    description: string;
    /**
     * The document's expiration date in YYYY-MM-DD format.
     */
    expirationDate?: Date;
    /**
     * The identifier of the File containing the document.
     */
    fileId: string;
}
/**
 * Information about the passport used for identification. Required if `method` is equal to `passport`.
 */
export declare class CreateAnEntityParametersCorporationBeneficialOwnersIndividualIdentificationPassport extends SpeakeasyBase {
    /**
     * The country that issued the passport.
     */
    country: string;
    /**
     * The passport's expiration date in YYYY-MM-DD format.
     */
    expirationDate: Date;
    /**
     * The identifier of the File containing the passport.
     */
    fileId: string;
}
/**
 * A means of verifying the person's identity.
 */
export declare class CreateAnEntityParametersCorporationBeneficialOwnersIndividualIdentification extends SpeakeasyBase {
    /**
     * Information about the United States driver's license used for identification. Required if `method` is equal to `drivers_license`.
     */
    driversLicense?: CreateAnEntityParametersCorporationBeneficialOwnersIndividualIdentificationDriversLicense;
    /**
     * A method that can be used to verify the individual's identity.
     */
    method: CreateAnEntityParametersCorporationBeneficialOwnersIndividualIdentificationMethodEnum;
    /**
     * An identification number that can be used to verify the individual's identity, such as a social security number.
     */
    number: string;
    /**
     * Information about the identification document provided. Required if `method` is equal to `other`.
     */
    other?: CreateAnEntityParametersCorporationBeneficialOwnersIndividualIdentificationOther;
    /**
     * Information about the passport used for identification. Required if `method` is equal to `passport`.
     */
    passport?: CreateAnEntityParametersCorporationBeneficialOwnersIndividualIdentificationPassport;
}
/**
 * Personal details for the beneficial owner.
 */
export declare class CreateAnEntityParametersCorporationBeneficialOwnersIndividual extends SpeakeasyBase {
    /**
     * The individual's address.
     */
    address: CreateAnEntityParametersCorporationBeneficialOwnersIndividualAddress;
    /**
     * The identification method for an individual can only be a passport, driver's license, or other document if you've confirmed the individual does not have a US tax id (either a Social Security Number or Individual Taxpayer Identification Number).
     */
    confirmedNoUsTaxId?: boolean;
    /**
     * The person's date of birth in YYYY-MM-DD format.
     */
    dateOfBirth: Date;
    /**
     * A means of verifying the person's identity.
     */
    identification: CreateAnEntityParametersCorporationBeneficialOwnersIndividualIdentification;
    /**
     * The person's legal name.
     */
    name: string;
}
/**
 * Why this person is considered a beneficial owner of the entity.
 */
export declare enum CreateAnEntityParametersCorporationBeneficialOwnersProngEnum {
    Ownership = "ownership",
    Control = "control"
}
export declare class CreateAnEntityParametersCorporationBeneficialOwners extends SpeakeasyBase {
    /**
     * This person's role or title within the entity.
     */
    companyTitle?: string;
    /**
     * Personal details for the beneficial owner.
     */
    individual: CreateAnEntityParametersCorporationBeneficialOwnersIndividual;
    /**
     * Why this person is considered a beneficial owner of the entity.
     */
    prong: CreateAnEntityParametersCorporationBeneficialOwnersProngEnum;
}
/**
 * Details of the corporation entity to create. Required if `structure` is equal to `corporation`.
 */
export declare class CreateAnEntityParametersCorporation extends SpeakeasyBase {
    /**
     * The corporation's address.
     */
    address: CreateAnEntityParametersCorporationAddress;
    /**
     * The identifying details of anyone controlling or owning 25% or more of the corporation.
     */
    beneficialOwners: CreateAnEntityParametersCorporationBeneficialOwners[];
    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the corporation's state of incorporation.
     */
    incorporationState?: string;
    /**
     * The legal name of the corporation.
     */
    name: string;
    /**
     * The Employer Identification Number (EIN) for the corporation.
     */
    taxIdentifier: string;
    /**
     * The website of the corporation.
     */
    website?: string;
}
/**
 * The individual's address.
 */
export declare class CreateAnEntityParametersJointIndividualsAddress extends SpeakeasyBase {
    /**
     * The city of the address.
     */
    city: string;
    /**
     * The first line of the address. This is usually the street number and street.
     */
    line1: string;
    /**
     * The second line of the address. This might be the floor or room number.
     */
    line2?: string;
    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the state of the address.
     */
    state: string;
    /**
     * The ZIP code of the address.
     */
    zip: string;
}
/**
 * Information about the United States driver's license used for identification. Required if `method` is equal to `drivers_license`.
 */
export declare class CreateAnEntityParametersJointIndividualsIdentificationDriversLicense extends SpeakeasyBase {
    /**
     * The driver's license's expiration date in YYYY-MM-DD format.
     */
    expirationDate: Date;
    /**
     * The identifier of the File containing the driver's license.
     */
    fileId: string;
    /**
     * The state that issued the provided driver's license.
     */
    state: string;
}
/**
 * A method that can be used to verify the individual's identity.
 */
export declare enum CreateAnEntityParametersJointIndividualsIdentificationMethodEnum {
    SocialSecurityNumber = "social_security_number",
    IndividualTaxpayerIdentificationNumber = "individual_taxpayer_identification_number",
    Passport = "passport",
    DriversLicense = "drivers_license",
    Other = "other"
}
/**
 * Information about the identification document provided. Required if `method` is equal to `other`.
 */
export declare class CreateAnEntityParametersJointIndividualsIdentificationOther extends SpeakeasyBase {
    /**
     * The two-character ISO 3166-1 code representing the country that issued the document.
     */
    country: string;
    /**
     * A description of the document submitted.
     */
    description: string;
    /**
     * The document's expiration date in YYYY-MM-DD format.
     */
    expirationDate?: Date;
    /**
     * The identifier of the File containing the document.
     */
    fileId: string;
}
/**
 * Information about the passport used for identification. Required if `method` is equal to `passport`.
 */
export declare class CreateAnEntityParametersJointIndividualsIdentificationPassport extends SpeakeasyBase {
    /**
     * The country that issued the passport.
     */
    country: string;
    /**
     * The passport's expiration date in YYYY-MM-DD format.
     */
    expirationDate: Date;
    /**
     * The identifier of the File containing the passport.
     */
    fileId: string;
}
/**
 * A means of verifying the person's identity.
 */
export declare class CreateAnEntityParametersJointIndividualsIdentification extends SpeakeasyBase {
    /**
     * Information about the United States driver's license used for identification. Required if `method` is equal to `drivers_license`.
     */
    driversLicense?: CreateAnEntityParametersJointIndividualsIdentificationDriversLicense;
    /**
     * A method that can be used to verify the individual's identity.
     */
    method: CreateAnEntityParametersJointIndividualsIdentificationMethodEnum;
    /**
     * An identification number that can be used to verify the individual's identity, such as a social security number.
     */
    number: string;
    /**
     * Information about the identification document provided. Required if `method` is equal to `other`.
     */
    other?: CreateAnEntityParametersJointIndividualsIdentificationOther;
    /**
     * Information about the passport used for identification. Required if `method` is equal to `passport`.
     */
    passport?: CreateAnEntityParametersJointIndividualsIdentificationPassport;
}
export declare class CreateAnEntityParametersJointIndividuals extends SpeakeasyBase {
    /**
     * The individual's address.
     */
    address: CreateAnEntityParametersJointIndividualsAddress;
    /**
     * The identification method for an individual can only be a passport, driver's license, or other document if you've confirmed the individual does not have a US tax id (either a Social Security Number or Individual Taxpayer Identification Number).
     */
    confirmedNoUsTaxId?: boolean;
    /**
     * The person's date of birth in YYYY-MM-DD format.
     */
    dateOfBirth: Date;
    /**
     * A means of verifying the person's identity.
     */
    identification: CreateAnEntityParametersJointIndividualsIdentification;
    /**
     * The person's legal name.
     */
    name: string;
}
/**
 * Details of the joint entity to create. Required if `structure` is equal to `joint`.
 */
export declare class CreateAnEntityParametersJoint extends SpeakeasyBase {
    /**
     * The two individuals that share control of the entity.
     */
    individuals: CreateAnEntityParametersJointIndividuals[];
    /**
     * The name of the joint entity.
     */
    name?: string;
}
/**
 * The individual's address.
 */
export declare class CreateAnEntityParametersNaturalPersonAddress extends SpeakeasyBase {
    /**
     * The city of the address.
     */
    city: string;
    /**
     * The first line of the address. This is usually the street number and street.
     */
    line1: string;
    /**
     * The second line of the address. This might be the floor or room number.
     */
    line2?: string;
    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the state of the address.
     */
    state: string;
    /**
     * The ZIP code of the address.
     */
    zip: string;
}
/**
 * Information about the United States driver's license used for identification. Required if `method` is equal to `drivers_license`.
 */
export declare class CreateAnEntityParametersNaturalPersonIdentificationDriversLicense extends SpeakeasyBase {
    /**
     * The driver's license's expiration date in YYYY-MM-DD format.
     */
    expirationDate: Date;
    /**
     * The identifier of the File containing the driver's license.
     */
    fileId: string;
    /**
     * The state that issued the provided driver's license.
     */
    state: string;
}
/**
 * A method that can be used to verify the individual's identity.
 */
export declare enum CreateAnEntityParametersNaturalPersonIdentificationMethodEnum {
    SocialSecurityNumber = "social_security_number",
    IndividualTaxpayerIdentificationNumber = "individual_taxpayer_identification_number",
    Passport = "passport",
    DriversLicense = "drivers_license",
    Other = "other"
}
/**
 * Information about the identification document provided. Required if `method` is equal to `other`.
 */
export declare class CreateAnEntityParametersNaturalPersonIdentificationOther extends SpeakeasyBase {
    /**
     * The two-character ISO 3166-1 code representing the country that issued the document.
     */
    country: string;
    /**
     * A description of the document submitted.
     */
    description: string;
    /**
     * The document's expiration date in YYYY-MM-DD format.
     */
    expirationDate?: Date;
    /**
     * The identifier of the File containing the document.
     */
    fileId: string;
}
/**
 * Information about the passport used for identification. Required if `method` is equal to `passport`.
 */
export declare class CreateAnEntityParametersNaturalPersonIdentificationPassport extends SpeakeasyBase {
    /**
     * The country that issued the passport.
     */
    country: string;
    /**
     * The passport's expiration date in YYYY-MM-DD format.
     */
    expirationDate: Date;
    /**
     * The identifier of the File containing the passport.
     */
    fileId: string;
}
/**
 * A means of verifying the person's identity.
 */
export declare class CreateAnEntityParametersNaturalPersonIdentification extends SpeakeasyBase {
    /**
     * Information about the United States driver's license used for identification. Required if `method` is equal to `drivers_license`.
     */
    driversLicense?: CreateAnEntityParametersNaturalPersonIdentificationDriversLicense;
    /**
     * A method that can be used to verify the individual's identity.
     */
    method: CreateAnEntityParametersNaturalPersonIdentificationMethodEnum;
    /**
     * An identification number that can be used to verify the individual's identity, such as a social security number.
     */
    number: string;
    /**
     * Information about the identification document provided. Required if `method` is equal to `other`.
     */
    other?: CreateAnEntityParametersNaturalPersonIdentificationOther;
    /**
     * Information about the passport used for identification. Required if `method` is equal to `passport`.
     */
    passport?: CreateAnEntityParametersNaturalPersonIdentificationPassport;
}
/**
 * Details of the natural person entity to create. Required if `structure` is equal to `natural_person`. Natural people entities should be submitted with `social_security_number` or `individual_taxpayer_identification_number` identification methods.
 */
export declare class CreateAnEntityParametersNaturalPerson extends SpeakeasyBase {
    /**
     * The individual's address.
     */
    address: CreateAnEntityParametersNaturalPersonAddress;
    /**
     * The identification method for an individual can only be a passport, driver's license, or other document if you've confirmed the individual does not have a US tax id (either a Social Security Number or Individual Taxpayer Identification Number).
     */
    confirmedNoUsTaxId?: boolean;
    /**
     * The person's date of birth in YYYY-MM-DD format.
     */
    dateOfBirth: Date;
    /**
     * A means of verifying the person's identity.
     */
    identification: CreateAnEntityParametersNaturalPersonIdentification;
    /**
     * The person's legal name.
     */
    name: string;
}
/**
 * The relationship between your group and the entity.
 */
export declare enum CreateAnEntityParametersRelationshipEnum {
    Affiliated = "affiliated",
    Informational = "informational",
    Unaffiliated = "unaffiliated"
}
/**
 * The type of Entity to create.
 */
export declare enum CreateAnEntityParametersStructureEnum {
    Corporation = "corporation",
    NaturalPerson = "natural_person",
    Joint = "joint",
    Trust = "trust"
}
export declare class CreateAnEntityParametersSupplementalDocuments extends SpeakeasyBase {
    /**
     * The identifier of the File containing the document.
     */
    fileId: string;
}
/**
 * The trust's address.
 */
export declare class CreateAnEntityParametersTrustAddress extends SpeakeasyBase {
    /**
     * The city of the address.
     */
    city: string;
    /**
     * The first line of the address. This is usually the street number and street.
     */
    line1: string;
    /**
     * The second line of the address. This might be the floor or room number.
     */
    line2?: string;
    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the state of the address.
     */
    state: string;
    /**
     * The ZIP code of the address.
     */
    zip: string;
}
/**
 * Whether the trust is `revocable` or `irrevocable`. Irrevocable trusts require their own Employer Identification Number. Revocable trusts require information about the individual `grantor` who created the trust.
 */
export declare enum CreateAnEntityParametersTrustCategoryEnum {
    Revocable = "revocable",
    Irrevocable = "irrevocable"
}
/**
 * The individual's address.
 */
export declare class CreateAnEntityParametersTrustGrantorAddress extends SpeakeasyBase {
    /**
     * The city of the address.
     */
    city: string;
    /**
     * The first line of the address. This is usually the street number and street.
     */
    line1: string;
    /**
     * The second line of the address. This might be the floor or room number.
     */
    line2?: string;
    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the state of the address.
     */
    state: string;
    /**
     * The ZIP code of the address.
     */
    zip: string;
}
/**
 * Information about the United States driver's license used for identification. Required if `method` is equal to `drivers_license`.
 */
export declare class CreateAnEntityParametersTrustGrantorIdentificationDriversLicense extends SpeakeasyBase {
    /**
     * The driver's license's expiration date in YYYY-MM-DD format.
     */
    expirationDate: Date;
    /**
     * The identifier of the File containing the driver's license.
     */
    fileId: string;
    /**
     * The state that issued the provided driver's license.
     */
    state: string;
}
/**
 * A method that can be used to verify the individual's identity.
 */
export declare enum CreateAnEntityParametersTrustGrantorIdentificationMethodEnum {
    SocialSecurityNumber = "social_security_number",
    IndividualTaxpayerIdentificationNumber = "individual_taxpayer_identification_number",
    Passport = "passport",
    DriversLicense = "drivers_license",
    Other = "other"
}
/**
 * Information about the identification document provided. Required if `method` is equal to `other`.
 */
export declare class CreateAnEntityParametersTrustGrantorIdentificationOther extends SpeakeasyBase {
    /**
     * The two-character ISO 3166-1 code representing the country that issued the document.
     */
    country: string;
    /**
     * A description of the document submitted.
     */
    description: string;
    /**
     * The document's expiration date in YYYY-MM-DD format.
     */
    expirationDate?: Date;
    /**
     * The identifier of the File containing the document.
     */
    fileId: string;
}
/**
 * Information about the passport used for identification. Required if `method` is equal to `passport`.
 */
export declare class CreateAnEntityParametersTrustGrantorIdentificationPassport extends SpeakeasyBase {
    /**
     * The country that issued the passport.
     */
    country: string;
    /**
     * The passport's expiration date in YYYY-MM-DD format.
     */
    expirationDate: Date;
    /**
     * The identifier of the File containing the passport.
     */
    fileId: string;
}
/**
 * A means of verifying the person's identity.
 */
export declare class CreateAnEntityParametersTrustGrantorIdentification extends SpeakeasyBase {
    /**
     * Information about the United States driver's license used for identification. Required if `method` is equal to `drivers_license`.
     */
    driversLicense?: CreateAnEntityParametersTrustGrantorIdentificationDriversLicense;
    /**
     * A method that can be used to verify the individual's identity.
     */
    method: CreateAnEntityParametersTrustGrantorIdentificationMethodEnum;
    /**
     * An identification number that can be used to verify the individual's identity, such as a social security number.
     */
    number: string;
    /**
     * Information about the identification document provided. Required if `method` is equal to `other`.
     */
    other?: CreateAnEntityParametersTrustGrantorIdentificationOther;
    /**
     * Information about the passport used for identification. Required if `method` is equal to `passport`.
     */
    passport?: CreateAnEntityParametersTrustGrantorIdentificationPassport;
}
/**
 * The grantor of the trust. Required if `category` is equal to `revocable`.
 */
export declare class CreateAnEntityParametersTrustGrantor extends SpeakeasyBase {
    /**
     * The individual's address.
     */
    address: CreateAnEntityParametersTrustGrantorAddress;
    /**
     * The identification method for an individual can only be a passport, driver's license, or other document if you've confirmed the individual does not have a US tax id (either a Social Security Number or Individual Taxpayer Identification Number).
     */
    confirmedNoUsTaxId?: boolean;
    /**
     * The person's date of birth in YYYY-MM-DD format.
     */
    dateOfBirth: Date;
    /**
     * A means of verifying the person's identity.
     */
    identification: CreateAnEntityParametersTrustGrantorIdentification;
    /**
     * The person's legal name.
     */
    name: string;
}
/**
 * The individual's address.
 */
export declare class CreateAnEntityParametersTrustTrusteesIndividualAddress extends SpeakeasyBase {
    /**
     * The city of the address.
     */
    city: string;
    /**
     * The first line of the address. This is usually the street number and street.
     */
    line1: string;
    /**
     * The second line of the address. This might be the floor or room number.
     */
    line2?: string;
    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the state of the address.
     */
    state: string;
    /**
     * The ZIP code of the address.
     */
    zip: string;
}
/**
 * Information about the United States driver's license used for identification. Required if `method` is equal to `drivers_license`.
 */
export declare class CreateAnEntityParametersTrustTrusteesIndividualIdentificationDriversLicense extends SpeakeasyBase {
    /**
     * The driver's license's expiration date in YYYY-MM-DD format.
     */
    expirationDate: Date;
    /**
     * The identifier of the File containing the driver's license.
     */
    fileId: string;
    /**
     * The state that issued the provided driver's license.
     */
    state: string;
}
/**
 * A method that can be used to verify the individual's identity.
 */
export declare enum CreateAnEntityParametersTrustTrusteesIndividualIdentificationMethodEnum {
    SocialSecurityNumber = "social_security_number",
    IndividualTaxpayerIdentificationNumber = "individual_taxpayer_identification_number",
    Passport = "passport",
    DriversLicense = "drivers_license",
    Other = "other"
}
/**
 * Information about the identification document provided. Required if `method` is equal to `other`.
 */
export declare class CreateAnEntityParametersTrustTrusteesIndividualIdentificationOther extends SpeakeasyBase {
    /**
     * The two-character ISO 3166-1 code representing the country that issued the document.
     */
    country: string;
    /**
     * A description of the document submitted.
     */
    description: string;
    /**
     * The document's expiration date in YYYY-MM-DD format.
     */
    expirationDate?: Date;
    /**
     * The identifier of the File containing the document.
     */
    fileId: string;
}
/**
 * Information about the passport used for identification. Required if `method` is equal to `passport`.
 */
export declare class CreateAnEntityParametersTrustTrusteesIndividualIdentificationPassport extends SpeakeasyBase {
    /**
     * The country that issued the passport.
     */
    country: string;
    /**
     * The passport's expiration date in YYYY-MM-DD format.
     */
    expirationDate: Date;
    /**
     * The identifier of the File containing the passport.
     */
    fileId: string;
}
/**
 * A means of verifying the person's identity.
 */
export declare class CreateAnEntityParametersTrustTrusteesIndividualIdentification extends SpeakeasyBase {
    /**
     * Information about the United States driver's license used for identification. Required if `method` is equal to `drivers_license`.
     */
    driversLicense?: CreateAnEntityParametersTrustTrusteesIndividualIdentificationDriversLicense;
    /**
     * A method that can be used to verify the individual's identity.
     */
    method: CreateAnEntityParametersTrustTrusteesIndividualIdentificationMethodEnum;
    /**
     * An identification number that can be used to verify the individual's identity, such as a social security number.
     */
    number: string;
    /**
     * Information about the identification document provided. Required if `method` is equal to `other`.
     */
    other?: CreateAnEntityParametersTrustTrusteesIndividualIdentificationOther;
    /**
     * Information about the passport used for identification. Required if `method` is equal to `passport`.
     */
    passport?: CreateAnEntityParametersTrustTrusteesIndividualIdentificationPassport;
}
/**
 * Details of the individual trustee. Required when the trustee `structure` is equal to `individual`.
 */
export declare class CreateAnEntityParametersTrustTrusteesIndividual extends SpeakeasyBase {
    /**
     * The individual's address.
     */
    address: CreateAnEntityParametersTrustTrusteesIndividualAddress;
    /**
     * The identification method for an individual can only be a passport, driver's license, or other document if you've confirmed the individual does not have a US tax id (either a Social Security Number or Individual Taxpayer Identification Number).
     */
    confirmedNoUsTaxId?: boolean;
    /**
     * The person's date of birth in YYYY-MM-DD format.
     */
    dateOfBirth: Date;
    /**
     * A means of verifying the person's identity.
     */
    identification: CreateAnEntityParametersTrustTrusteesIndividualIdentification;
    /**
     * The person's legal name.
     */
    name: string;
}
/**
 * The structure of the trustee.
 */
export declare enum CreateAnEntityParametersTrustTrusteesStructureEnum {
    Individual = "individual"
}
export declare class CreateAnEntityParametersTrustTrustees extends SpeakeasyBase {
    /**
     * Details of the individual trustee. Required when the trustee `structure` is equal to `individual`.
     */
    individual?: CreateAnEntityParametersTrustTrusteesIndividual;
    /**
     * The structure of the trustee.
     */
    structure: CreateAnEntityParametersTrustTrusteesStructureEnum;
}
/**
 * Details of the trust entity to create. Required if `structure` is equal to `trust`.
 */
export declare class CreateAnEntityParametersTrust extends SpeakeasyBase {
    /**
     * The trust's address.
     */
    address: CreateAnEntityParametersTrustAddress;
    /**
     * Whether the trust is `revocable` or `irrevocable`. Irrevocable trusts require their own Employer Identification Number. Revocable trusts require information about the individual `grantor` who created the trust.
     */
    category: CreateAnEntityParametersTrustCategoryEnum;
    /**
     * The identifier of the File containing the formation document of the trust.
     */
    formationDocumentFileId?: string;
    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the state in which the trust was formed.
     */
    formationState?: string;
    /**
     * The grantor of the trust. Required if `category` is equal to `revocable`.
     */
    grantor?: CreateAnEntityParametersTrustGrantor;
    /**
     * The legal name of the trust.
     */
    name: string;
    /**
     * The Employer Identification Number (EIN) for the trust. Required if `category` is equal to `irrevocable`.
     */
    taxIdentifier?: string;
    /**
     * The trustees of the trust.
     */
    trustees: CreateAnEntityParametersTrustTrustees[];
}
export declare class CreateAnEntityParameters extends SpeakeasyBase {
    /**
     * Details of the corporation entity to create. Required if `structure` is equal to `corporation`.
     */
    corporation?: CreateAnEntityParametersCorporation;
    /**
     * The description you choose to give the entity.
     */
    description?: string;
    /**
     * Details of the joint entity to create. Required if `structure` is equal to `joint`.
     */
    joint?: CreateAnEntityParametersJoint;
    /**
     * Details of the natural person entity to create. Required if `structure` is equal to `natural_person`. Natural people entities should be submitted with `social_security_number` or `individual_taxpayer_identification_number` identification methods.
     */
    naturalPerson?: CreateAnEntityParametersNaturalPerson;
    /**
     * The relationship between your group and the entity.
     */
    relationship: CreateAnEntityParametersRelationshipEnum;
    /**
     * The type of Entity to create.
     */
    structure: CreateAnEntityParametersStructureEnum;
    /**
     * Additional documentation associated with the entity.
     */
    supplementalDocuments?: CreateAnEntityParametersSupplementalDocuments[];
    /**
     * Details of the trust entity to create. Required if `structure` is equal to `trust`.
     */
    trust?: CreateAnEntityParametersTrust;
}
