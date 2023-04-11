import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListLicenseesRequest extends SpeakeasyBase {
    key: string;
    /**
     * Specify the maximum number of results to return per page. Default and maximum is `100`.
     */
    limit?: number;
    /**
     * Filter result by licensee name. Query can be shortened to `q=`
     */
    query?: string;
    /**
     * Specify ID of the licensee after which you would like to list results
     */
    startingAfter?: number;
    userToken?: string;
}
export declare class ListLicenseesResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    /**
     * Success
     */
    licenseesResponse?: shared.LicenseesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
