import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateLicenseeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateLicenseeRequestBody extends SpeakeasyBase {
    /**
     * If set to 'false', the Licensee is disabled. Licensee can not obtain new Licenses, and validation is disabled
     */
    active: boolean;
    /**
     * Mark Licensee for transfer.
     */
    markedForTransfer?: boolean;
    name?: string;
    /**
     * Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee
     */
    number?: string;
    /**
     * 'productNumber' to assign new Licensee object
     */
    productNumber: string;
}
export declare class CreateLicenseeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful request
     */
    netlicensing?: shared.Netlicensing;
}
