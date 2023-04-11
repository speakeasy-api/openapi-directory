import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateLicenseeRequest extends SpeakeasyBase {
    licenseeEditable: shared.LicenseeEditable;
    key: string;
    userToken?: string;
}
export declare class CreateLicenseeResponse extends SpeakeasyBase {
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
