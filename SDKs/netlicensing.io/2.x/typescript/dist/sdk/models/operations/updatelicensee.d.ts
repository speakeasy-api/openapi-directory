import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateLicenseeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateLicenseeRequestBody extends SpeakeasyBase {
    /**
     * If set to 'false', the Licensee is disabled. Licensee can not obtain new Licenses, and validation is disabled
     */
    active?: boolean;
    /**
     * Mark Licensee for transfer.
     */
    markedForTransfer?: boolean;
    name?: string;
    /**
     * New Licensee number (update).
     */
    number?: string;
}
export declare class UpdateLicenseeRequest extends SpeakeasyBase {
    requestBody?: UpdateLicenseeRequestBody;
    /**
     * Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee.
     */
    licenseeNumber: string;
}
export declare class UpdateLicenseeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful request
     */
    netlicensing?: shared.Netlicensing;
}
