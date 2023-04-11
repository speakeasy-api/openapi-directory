import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Document country
 */
export declare enum BehaviorCountryEnum {
    Co = "co",
    Ve = "ve",
    Cl = "cl",
    Mx = "mx",
    Pe = "pe",
    Do = "do",
    Sv = "sv",
    Gt = "gt",
    Bo = "bo",
    Cr = "cr",
    Ec = "ec",
    Pa = "pa",
    Br = "br"
}
/**
 * Document type associated with the background check
 */
export declare enum BehaviorDocumentTypeEnum {
    NationalId = "national-id",
    Passport = "passport",
    ForeignId = "foreign-id",
    Nit = "nit",
    DiplomaticId = "diplomatic-id",
    CivilRegistration = "civil-registration",
    IdentityCard = "identity-card",
    ForeignerCard = "foreigner-card",
    ProfessionalCard = "professional-card",
    MilitaryCard = "military-card",
    Pep = "pep",
    Nis = "nis",
    Dni = "dni",
    Rui = "rui",
    LicensePlate = "license-plate",
    Query = "query",
    Name = "name",
    Rut = "rut",
    Nuip = "nuip",
    ForeignSocieties = "foreign-societies",
    Escrow = "escrow",
    IndividualRegistration = "individual-registration",
    GeneralRegistration = "general-registration",
    Curp = "curp",
    Dui = "dui",
    DriverLicense = "driver-license",
    Ruc = "ruc"
}
/**
 * Represents behaviour reports
 */
export declare class Behavior extends SpeakeasyBase {
    /**
     * Birth date of reported person
     */
    birthDate: Date;
    /**
     * Document country
     */
    country: BehaviorCountryEnum;
    /**
     * Feedback creation date
     */
    creationDate?: Date;
    /**
     * Person document ID
     */
    documentId: string;
    /**
     * Document type associated with the background check
     */
    documentType: BehaviorDocumentTypeEnum;
    /**
     * Reported person e-mail
     */
    email: string;
    /**
     * Behavior report date
     */
    feedbackDate: Date;
    /**
     * Person first name
     */
    firstName: string;
    /**
     * Person last name
     */
    lastName: string;
    /**
     * Phone number of the reported person
     */
    phoneNumber?: string;
    /**
     * Report reason
     */
    reason: string;
}
