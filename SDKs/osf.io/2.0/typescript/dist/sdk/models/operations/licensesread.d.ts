import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LicensesReadRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the license.
     */
    licenseId: string;
}
/**
 * The properties of the license.
 */
export declare class LicensesReadLicenseAttributes extends SpeakeasyBase {
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
export declare class LicensesReadLicenseLinks extends SpeakeasyBase {
    /**
     * A link to the detail page for the license.
     */
    self?: string;
}
/**
 * OK
 */
export declare class LicensesReadLicense extends SpeakeasyBase {
    /**
     * The properties of the license.
     */
    attributes?: LicensesReadLicenseAttributes;
    /**
     * The identifier of the license.
     */
    id?: string;
    /**
     * URLs to alternative representations of the license.
     */
    links?: LicensesReadLicenseLinks;
    /**
     * The type identifier of the license (`license`).
     */
    type?: string;
}
export declare class LicensesReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
