import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The disabilty classifications model
 */
export declare class SensitiveDataDisabilityDisabilityClassifications extends SpeakeasyBase {
    /**
     * Indicates the type of disability. This field is only allowed if hasDisability is set to 1=Yes. Values include:<br  /><br  />Auditory<br  />Cognitive, learning, and neurological<br  />Physical<br  />Speech<br  />Vision<br  />Prefer not to say<br  /><br  />Valid values can be obtained from Company Codes endpoint, codeResource = disabilityClassification
     */
    classification?: string;
}
/**
 * Add or update disability data.
 */
export declare class SensitiveDataDisability extends SpeakeasyBase {
    /**
     * Description of employee's disability or accommodation.<br  />Max length: 50
     */
    disability?: string;
    /**
     * Add or update employee's disability classifications
     */
    disabilityClassifications?: SensitiveDataDisabilityDisabilityClassifications[];
    /**
     * Indicates if the employee has a disability. Values include:<br  /><br  />0 = No<br  />1 = Yes<br  />2 = Prefer not to say
     */
    hasDisability?: string;
}
/**
 * The ethnic racial identity model
 */
export declare class SensitiveDataEthnicityEthnicRacialIdentities extends SpeakeasyBase {
    /**
     * Employee's preferred or chosen ethnicity or race.<br  />Max length: 40.
     */
    description?: string;
}
/**
 * Add or update ethnicity data.
 */
export declare class SensitiveDataEthnicity extends SpeakeasyBase {
    /**
     * Add or update Ethnic Racial Identity
     */
    ethnicRacialIdentities?: SensitiveDataEthnicityEthnicRacialIdentities[];
    /**
     * Employee's legal ethnicity or race.<br  />A = Asian<br  />B = Black<br  />H = Hispanic<br  />I = American Indian<br  />N = Native Hawaiian or Pacific Islander<br  />T = Two or More Races<br  />W = White<br  /><br  />Valid values can be obtained from Company Codes endpoint, codeResource = ethnicity
     */
    ethnicity?: string;
}
/**
 * Add or update gender data.
 */
export declare class SensitiveDataGender extends SpeakeasyBase {
    /**
     * Specifies whether employee's preferred pronouns will be displayed to co-workers in Community, Directory, etc. Values include:<br  /><br  />0 = No<br  />1 = Yes
     */
    displayPronouns?: boolean;
    /**
     * Employee's preferred or chosen gender identification.<br  />Max length: 40
     */
    genderIdentityDescription?: string;
    /**
     * Employee's self-identification of legal gender. Numerical values include:<br  /><br  />0 = No<br  />1 = Yes<br  />2 = Prefer not to say
     */
    identifyAsLegalGender?: string;
    /**
     * Employee's legal gender. Values include:<br  /><br  />M = Male<br  />F = Female<br  /><br  />Valid values can be obtained from Company Codes endpoint, codeResource = legalGender
     */
    legalGender?: string;
    /**
     * Employee's preferred or chosen pronouns. Values include:<br  /><br  />He / Him / His<br  />She / Her / Hers<br  />They / Them / Theirs<br  />Prefer not to say<br  /><br  />Valid values can be obtained from Company Codes endpoint, codeResource = preferredPronouns
     */
    pronouns?: string;
    /**
     * Employee's self-identification of sexual orientation. Values may include values below. Additionally, any custom value may be provided.<br  /><br  />Asexual<br  />Gay / Lesbian<br  />Heterosexual / Straight<br  />Pansexual<br  />Queer<br  />Bisexual<br  />Prefer not to say
     */
    sexualOrientation?: string;
}
/**
 * Add or update veteran data.
 */
export declare class SensitiveDataVeteran extends SpeakeasyBase {
    /**
     * Indicates if the employee is a veteran.  Values include:<br  /><br  />0 = No<br  />1 = Yes<br  />2 = Prefer not to say
     */
    isVeteran?: string;
    /**
     * Employee's Veteran Notes<br  />Max length: 50
     */
    veteran?: string;
}
/**
 * The sensitive data model
 */
export declare class SensitiveData extends SpeakeasyBase {
    /**
     * Add or update disability data.
     */
    disability?: SensitiveDataDisability;
    /**
     * Add or update ethnicity data.
     */
    ethnicity?: SensitiveDataEthnicity;
    /**
     * Add or update gender data.
     */
    gender?: SensitiveDataGender;
    /**
     * Add or update veteran data.
     */
    veteran?: SensitiveDataVeteran;
}
