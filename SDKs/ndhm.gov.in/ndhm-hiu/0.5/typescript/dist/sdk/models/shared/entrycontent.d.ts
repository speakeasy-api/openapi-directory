import { SpeakeasyBase } from "../../../internal/utils";
/**
 * mimetype of the content.
 */
export declare enum EntryContentMediaEnum {
    ApplicationFhirPlusJson = "application/fhir+json"
}
export declare class EntryContent extends SpeakeasyBase {
    /**
     * care context reference number.
     */
    careContextReference: string;
    /**
     * Md5 checksum of the content before encryption
     */
    checksum: string;
    /**
     * Encrypted content
     */
    content: string;
    /**
     * mimetype of the content.
     */
    media: EntryContentMediaEnum;
}
