import { SpeakeasyBase } from "../../../internal/utils";
/**
 * mimetype of the content.
 */
export declare enum EntryLinkMediaEnum {
    ApplicationFhirPlusJson = "application/fhir+json"
}
export declare class EntryLink extends SpeakeasyBase {
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
    link: string;
    /**
     * mimetype of the content.
     */
    media: EntryLinkMediaEnum;
}
