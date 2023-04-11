import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Reserved for future use.
 */
export declare class GoogleCloudDocumentaiV1beta2KeyValuePairHint extends SpeakeasyBase {
    /**
     * The key text for the hint.
     */
    key?: string;
    /**
     * Type of the value. This is case-insensitive, and could be one of: ADDRESS, LOCATION, ORGANIZATION, PERSON, PHONE_NUMBER, ID, NUMBER, EMAIL, PRICE, TERMS, DATE, NAME. Types not in this list will be ignored.
     */
    valueTypes?: string[];
}
