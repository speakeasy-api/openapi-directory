import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateLicenseeRequest extends SpeakeasyBase {
    licenseeEditable: shared.LicenseeEditable;
    key: string;
    licensee: string;
    userToken?: string;
}
export declare class UpdateLicenseeResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    /**
     * Success
     */
    licenseeResponse?: shared.LicenseeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
