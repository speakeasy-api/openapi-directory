import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A key-value pair attached to a file that is either public or private to an application.
 *
 * @remarks
 * The following limits apply to file properties:
 * - Maximum of 100 properties total per file
 * - Maximum of 30 private properties per app
 * - Maximum of 30 public properties
 * - Maximum of 124 bytes size limit on (key + value) string in UTF-8 encoding for a single property.
 */
export declare class Property extends SpeakeasyBase {
    /**
     * ETag of the property.
     */
    etag?: string;
    /**
     * The key of this property.
     */
    key?: string;
    /**
     * This is always drive#property.
     */
    kind?: string;
    /**
     * The link back to this property.
     */
    selfLink?: string;
    /**
     * The value of this property.
     */
    value?: string;
    /**
     * The visibility of this property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE). Private properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties.
     */
    visibility?: string;
}
