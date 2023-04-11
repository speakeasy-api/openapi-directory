import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's name. If the name is a mononym, the family name is empty.
 */
export declare class Name extends SpeakeasyBase {
    /**
     * Output only. The display name formatted according to the locale specified by the viewer's account or the `Accept-Language` HTTP header.
     */
    displayName?: string;
    /**
     * Output only. The display name with the last name first formatted according to the locale specified by the viewer's account or the `Accept-Language` HTTP header.
     */
    displayNameLastFirst?: string;
    /**
     * The family name.
     */
    familyName?: string;
    /**
     * The given name.
     */
    givenName?: string;
    /**
     * The honorific prefixes, such as `Mrs.` or `Dr.`
     */
    honorificPrefix?: string;
    /**
     * The honorific suffixes, such as `Jr.`
     */
    honorificSuffix?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The middle name(s).
     */
    middleName?: string;
    /**
     * The family name spelled as it sounds.
     */
    phoneticFamilyName?: string;
    /**
     * The full name spelled as it sounds.
     */
    phoneticFullName?: string;
    /**
     * The given name spelled as it sounds.
     */
    phoneticGivenName?: string;
    /**
     * The honorific prefixes spelled as they sound.
     */
    phoneticHonorificPrefix?: string;
    /**
     * The honorific suffixes spelled as they sound.
     */
    phoneticHonorificSuffix?: string;
    /**
     * The middle name(s) spelled as they sound.
     */
    phoneticMiddleName?: string;
    /**
     * The free form name value.
     */
    unstructuredName?: string;
}
/**
 * A person's name. If the name is a mononym, the family name is empty.
 */
export declare class NameInput extends SpeakeasyBase {
    /**
     * The family name.
     */
    familyName?: string;
    /**
     * The given name.
     */
    givenName?: string;
    /**
     * The honorific prefixes, such as `Mrs.` or `Dr.`
     */
    honorificPrefix?: string;
    /**
     * The honorific suffixes, such as `Jr.`
     */
    honorificSuffix?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
    /**
     * The middle name(s).
     */
    middleName?: string;
    /**
     * The family name spelled as it sounds.
     */
    phoneticFamilyName?: string;
    /**
     * The full name spelled as it sounds.
     */
    phoneticFullName?: string;
    /**
     * The given name spelled as it sounds.
     */
    phoneticGivenName?: string;
    /**
     * The honorific prefixes spelled as they sound.
     */
    phoneticHonorificPrefix?: string;
    /**
     * The honorific suffixes spelled as they sound.
     */
    phoneticHonorificSuffix?: string;
    /**
     * The middle name(s) spelled as they sound.
     */
    phoneticMiddleName?: string;
    /**
     * The free form name value.
     */
    unstructuredName?: string;
}
