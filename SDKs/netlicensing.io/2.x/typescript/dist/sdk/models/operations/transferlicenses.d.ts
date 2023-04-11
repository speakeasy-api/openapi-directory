import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TransferLicensesSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class TransferLicensesRequestBody extends SpeakeasyBase {
    /**
     * Licensee number which Licenses to be transferred
     */
    sourceLicenseeNumber: string;
}
export declare class TransferLicensesRequest extends SpeakeasyBase {
    requestBody: TransferLicensesRequestBody;
    /**
     * Licensee number with a maximum length of 1000 characters
     */
    licenseeNumber: string;
}
export declare class TransferLicensesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful request
     */
    netlicensing?: shared.Netlicensing;
}
