import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LicenseEditorialVideoSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class LicenseEditorialVideoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    licenseEditorialContentResults?: shared.LicenseEditorialContentResults;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
