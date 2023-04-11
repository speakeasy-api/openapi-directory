import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LandlordControllerGetSummaryDetailsRequest extends SpeakeasyBase {
    /**
     * The unique client short-name
     */
    shortName: string;
    /**
     * The login token returned from the /session POST call
     */
    token: string;
}
export declare class LandlordControllerGetSummaryDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    landlordSummaryModel?: shared.LandlordSummaryModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
