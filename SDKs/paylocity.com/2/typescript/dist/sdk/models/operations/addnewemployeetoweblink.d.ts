import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddNewEmployeeToWebLinkSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class AddNewEmployeeToWebLinkRequest extends SpeakeasyBase {
    /**
     * Company Id
     */
    companyId: string;
    /**
     * StagedEmployee Model
     */
    stagedEmployee: shared.StagedEmployee;
}
export declare class AddNewEmployeeToWebLinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    errors?: shared.ErrorT[];
    /**
     * Successfully Added
     */
    trackingNumberResponses?: shared.TrackingNumberResponse[];
}
