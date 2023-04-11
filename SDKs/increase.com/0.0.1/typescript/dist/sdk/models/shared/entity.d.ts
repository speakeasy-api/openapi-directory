import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The corporation's address.
 */
export declare class EntityCorporationAddress extends SpeakeasyBase {
    /**
     * The city of the address.
     */
    city: string;
    /**
     * The first line of the address.
     */
    line1: string;
    /**
     * The second line of the address.
     */
    line2: string;
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
 * The person's address.
 */
export declare class EntityCorporationBeneficialOwnersElementIndividualAddress extends SpeakeasyBase {
    /**
     * The city of the address.
     */
    city: string;
    /**
     * The first line of the address.
     */
    line1: string;
    /**
     * The second line of the address.
     */
    line2: string;
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
 * A method that can be used to verify the individual's identity.
 */
export declare enum EntityCorporationBeneficialOwnersElementIndividualIdentificationMethodEnum {
    SocialSecurityNumber = "social_security_number",
    IndividualTaxpayerIdentificationNumber = "individual_taxpayer_identification_number",
    Passport = "passport",
    DriversLicense = "drivers_license",
    Other = "other"
}
/**
 * A means of verifying the person's identity.
 */
export declare class EntityCorporationBeneficialOwnersElementIndividualIdentification extends SpeakeasyBase {
    /**
     * A method that can be used to verify the individual's identity.
     */
    method: EntityCorporationBeneficialOwnersElementIndividualIdentificationMethodEnum;
    /**
     * The last 4 digits of the identification number that can be used to verify the individual's identity.
     */
    numberLast4: string;
}
/**
 * Personal details for the beneficial owner.
 */
export declare class EntityCorporationBeneficialOwnersElementIndividual extends SpeakeasyBase {
    /**
     * The person's address.
     */
    address: EntityCorporationBeneficialOwnersElementIndividualAddress;
    /**
     * The person's date of birth in YYYY-MM-DD format.
     */
    dateOfBirth: Date;
    /**
     * A means of verifying the person's identity.
     */
    identification: EntityCorporationBeneficialOwnersElementIndividualIdentification;
    /**
     * The person's legal name.
     */
    name: string;
}
/**
 * Why this person is considered a beneficial owner of the entity.
 */
export declare enum EntityCorporationBeneficialOwnersElementProngEnum {
    Ownership = "ownership",
    Control = "control"
}
export declare class EntityCorporationBeneficialOwnersElement extends SpeakeasyBase {
    /**
     * This person's role or title within the entity.
     */
    companyTitle: string;
    /**
     * Personal details for the beneficial owner.
     */
    individual: EntityCorporationBeneficialOwnersElementIndividual;
    /**
     * Why this person is considered a beneficial owner of the entity.
     */
    prong: EntityCorporationBeneficialOwnersElementProngEnum;
}
/**
 * Details of the corporation entity. Will be present if `structure` is equal to `corporation`.
 */
export declare class EntityCorporation extends SpeakeasyBase {
    /**
     * The corporation's address.
     */
    address: EntityCorporationAddress;
    /**
     * The identifying details of anyone controlling or owning 25% or more of the corporation.
     */
    beneficialOwners: EntityCorporationBeneficialOwnersElement[];
    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the corporation's state of incorporation.
     */
    incorporationState: string;
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
    website: string;
}
/**
 * The person's address.
 */
export declare class EntityJointIndividualAddress extends SpeakeasyBase {
    /**
     * The city of the address.
     */
    city: string;
    /**
     * The first line of the address.
     */
    line1: string;
    /**
     * The second line of the address.
     */
    line2: string;
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
 * A method that can be used to verify the individual's identity.
 */
export declare enum EntityJointIndividualIdentificationMethodEnum {
    SocialSecurityNumber = "social_security_number",
    IndividualTaxpayerIdentificationNumber = "individual_taxpayer_identification_number",
    Passport = "passport",
    DriversLicense = "drivers_license",
    Other = "other"
}
/**
 * A means of verifying the person's identity.
 */
export declare class EntityJointIndividualIdentification extends SpeakeasyBase {
    /**
     * A method that can be used to verify the individual's identity.
     */
    method: EntityJointIndividualIdentificationMethodEnum;
    /**
     * The last 4 digits of the identification number that can be used to verify the individual's identity.
     */
    numberLast4: string;
}
export declare class EntityJointIndividual extends SpeakeasyBase {
    /**
     * The person's address.
     */
    address: EntityJointIndividualAddress;
    /**
     * The person's date of birth in YYYY-MM-DD format.
     */
    dateOfBirth: Date;
    /**
     * A means of verifying the person's identity.
     */
    identification: EntityJointIndividualIdentification;
    /**
     * The person's legal name.
     */
    name: string;
}
/**
 * Details of the joint entity. Will be present if `structure` is equal to `joint`.
 */
export declare class EntityJoint extends SpeakeasyBase {
    /**
     * The two individuals that share control of the entity.
     */
    individuals: EntityJointIndividual[];
    /**
     * The entity's name.
     */
    name: string;
}
/**
 * The person's address.
 */
export declare class EntityIndividualAddress extends SpeakeasyBase {
    /**
     * The city of the address.
     */
    city: string;
    /**
     * The first line of the address.
     */
    line1: string;
    /**
     * The second line of the address.
     */
    line2: string;
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
 * A method that can be used to verify the individual's identity.
 */
export declare enum EntityIndividualIdentificationMethodEnum {
    SocialSecurityNumber = "social_security_number",
    IndividualTaxpayerIdentificationNumber = "individual_taxpayer_identification_number",
    Passport = "passport",
    DriversLicense = "drivers_license",
    Other = "other"
}
/**
 * A means of verifying the person's identity.
 */
export declare class EntityIndividualIdentification extends SpeakeasyBase {
    /**
     * A method that can be used to verify the individual's identity.
     */
    method: EntityIndividualIdentificationMethodEnum;
    /**
     * The last 4 digits of the identification number that can be used to verify the individual's identity.
     */
    numberLast4: string;
}
/**
 * Details of the natural person entity. Will be present if `structure` is equal to `natural_person`.
 */
export declare class EntityIndividual extends SpeakeasyBase {
    /**
     * The person's address.
     */
    address: EntityIndividualAddress;
    /**
     * The person's date of birth in YYYY-MM-DD format.
     */
    dateOfBirth: Date;
    /**
     * A means of verifying the person's identity.
     */
    identification: EntityIndividualIdentification;
    /**
     * The person's legal name.
     */
    name: string;
}
/**
 * The relationship between your group and the entity.
 */
export declare enum EntityRelationshipEnum {
    Affiliated = "affiliated",
    Informational = "informational",
    Unaffiliated = "unaffiliated"
}
/**
 * The entity's legal structure.
 */
export declare enum EntityStructureEnum {
    Corporation = "corporation",
    NaturalPerson = "natural_person",
    Joint = "joint",
    Trust = "trust"
}
export declare class EntitySupplementalDocumentsElement extends SpeakeasyBase {
    /**
     * The File containing the document.
     */
    fileId: string;
}
/**
 * The trust's address.
 */
export declare class EntityTrustAddress extends SpeakeasyBase {
    /**
     * The city of the address.
     */
    city: string;
    /**
     * The first line of the address.
     */
    line1: string;
    /**
     * The second line of the address.
     */
    line2: string;
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
 * Whether the trust is `revocable` or `irrevocable`.
 */
export declare enum EntityTrustCategoryEnum {
    Revocable = "revocable",
    Irrevocable = "irrevocable"
}
/**
 * The person's address.
 */
export declare class EntityTrustIndividualAddress extends SpeakeasyBase {
    /**
     * The city of the address.
     */
    city: string;
    /**
     * The first line of the address.
     */
    line1: string;
    /**
     * The second line of the address.
     */
    line2: string;
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
 * A method that can be used to verify the individual's identity.
 */
export declare enum EntityTrustIndividualIdentificationMethodEnum {
    SocialSecurityNumber = "social_security_number",
    IndividualTaxpayerIdentificationNumber = "individual_taxpayer_identification_number",
    Passport = "passport",
    DriversLicense = "drivers_license",
    Other = "other"
}
/**
 * A means of verifying the person's identity.
 */
export declare class EntityTrustIndividualIdentification extends SpeakeasyBase {
    /**
     * A method that can be used to verify the individual's identity.
     */
    method: EntityTrustIndividualIdentificationMethodEnum;
    /**
     * The last 4 digits of the identification number that can be used to verify the individual's identity.
     */
    numberLast4: string;
}
/**
 * The grantor of the trust. Will be present if the `category` is `revocable`.
 */
export declare class EntityTrustIndividual extends SpeakeasyBase {
    /**
     * The person's address.
     */
    address: EntityTrustIndividualAddress;
    /**
     * The person's date of birth in YYYY-MM-DD format.
     */
    dateOfBirth: Date;
    /**
     * A means of verifying the person's identity.
     */
    identification: EntityTrustIndividualIdentification;
    /**
     * The person's legal name.
     */
    name: string;
}
/**
 * The person's address.
 */
export declare class EntityTrustTrusteesElementIndividualAddress extends SpeakeasyBase {
    /**
     * The city of the address.
     */
    city: string;
    /**
     * The first line of the address.
     */
    line1: string;
    /**
     * The second line of the address.
     */
    line2: string;
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
 * A method that can be used to verify the individual's identity.
 */
export declare enum EntityTrustTrusteesElementIndividualIdentificationMethodEnum {
    SocialSecurityNumber = "social_security_number",
    IndividualTaxpayerIdentificationNumber = "individual_taxpayer_identification_number",
    Passport = "passport",
    DriversLicense = "drivers_license",
    Other = "other"
}
/**
 * A means of verifying the person's identity.
 */
export declare class EntityTrustTrusteesElementIndividualIdentification extends SpeakeasyBase {
    /**
     * A method that can be used to verify the individual's identity.
     */
    method: EntityTrustTrusteesElementIndividualIdentificationMethodEnum;
    /**
     * The last 4 digits of the identification number that can be used to verify the individual's identity.
     */
    numberLast4: string;
}
/**
 * The individual trustee of the trust. Will be present if the trustee's `structure` is equal to `individual`.
 */
export declare class EntityTrustTrusteesElementIndividual extends SpeakeasyBase {
    /**
     * The person's address.
     */
    address: EntityTrustTrusteesElementIndividualAddress;
    /**
     * The person's date of birth in YYYY-MM-DD format.
     */
    dateOfBirth: Date;
    /**
     * A means of verifying the person's identity.
     */
    identification: EntityTrustTrusteesElementIndividualIdentification;
    /**
     * The person's legal name.
     */
    name: string;
}
/**
 * The structure of the trustee. Will always be equal to `individual`.
 */
export declare enum EntityTrustTrusteesElementStructureEnum {
    Individual = "individual"
}
export declare class EntityTrustTrusteesElement extends SpeakeasyBase {
    /**
     * The individual trustee of the trust. Will be present if the trustee's `structure` is equal to `individual`.
     */
    individual: EntityTrustTrusteesElementIndividual;
    /**
     * The structure of the trustee. Will always be equal to `individual`.
     */
    structure: EntityTrustTrusteesElementStructureEnum;
}
/**
 * Details of the trust entity. Will be present if `structure` is equal to `trust`.
 */
export declare class EntityTrust extends SpeakeasyBase {
    /**
     * The trust's address.
     */
    address: EntityTrustAddress;
    /**
     * Whether the trust is `revocable` or `irrevocable`.
     */
    category: EntityTrustCategoryEnum;
    /**
     * The ID for the File containing the formation document of the trust.
     */
    formationDocumentFileId: string;
    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the state in which the trust was formed.
     */
    formationState: string;
    /**
     * The grantor of the trust. Will be present if the `category` is `revocable`.
     */
    grantor: EntityTrustIndividual;
    /**
     * The trust's name
     */
    name: string;
    /**
     * The Employer Identification Number (EIN) of the trust itself.
     */
    taxIdentifier: string;
    /**
     * The trustees of the trust.
     */
    trustees: EntityTrustTrusteesElement[];
}
/**
 * A constant representing the object's type. For this resource it will always be `entity`.
 */
export declare enum EntityTypeEnum {
    Entity = "entity"
}
/**
 * Entities are the legal entities that own accounts. They can be people, corporations, partnerships, or trusts.
 */
export declare class Entity extends SpeakeasyBase {
    /**
     * Details of the corporation entity. Will be present if `structure` is equal to `corporation`.
     */
    corporation: EntityCorporation;
    /**
     * The entity's description for display purposes.
     */
    description: string;
    /**
     * The entity's identifier.
     */
    id: string;
    /**
     * Details of the joint entity. Will be present if `structure` is equal to `joint`.
     */
    joint: EntityJoint;
    /**
     * Details of the natural person entity. Will be present if `structure` is equal to `natural_person`.
     */
    naturalPerson: EntityIndividual;
    /**
     * The relationship between your group and the entity.
     */
    relationship: EntityRelationshipEnum;
    /**
     * The entity's legal structure.
     */
    structure: EntityStructureEnum;
    /**
     * Additional documentation associated with the entity.
     */
    supplementalDocuments: EntitySupplementalDocumentsElement[];
    /**
     * Details of the trust entity. Will be present if `structure` is equal to `trust`.
     */
    trust: EntityTrust;
    /**
     * A constant representing the object's type. For this resource it will always be `entity`.
     */
    type: EntityTypeEnum;
}
