import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The properties of the license.
 */
export declare class LicenseListLicenseAttributes extends SpeakeasyBase {
    /**
     * Name of the license.
     */
    name?: string;
    /**
     * Fields required for this license (provided to help front-end validators). Maps to properties on the NodeLicense model.
     */
    requiredFields?: string[];
    /**
     * Full text of the license.
     */
    text?: string;
}
/**
 * URLs to alternative representations of the license.
 */
export declare class LicenseListLicenseLinks extends SpeakeasyBase {
    /**
     * A link to the detail page for the license.
     */
    self?: string;
}
export declare class LicenseListLicense extends SpeakeasyBase {
    /**
     * The properties of the license.
     */
    attributes?: LicenseListLicenseAttributes;
    /**
     * The identifier of the license.
     */
    id?: string;
    /**
     * URLs to alternative representations of the license.
     */
    links?: LicenseListLicenseLinks;
    /**
     * The type identifier of the license (`license`).
     */
    type?: string;
}
export declare class LicenseListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
