import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveWageSettingSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveWageSettingRequest extends SpeakeasyBase {
    /**
     * The ID of the team member for which to retrieve the wage setting.
     */
    teamMemberId: string;
}
export declare class RetrieveWageSettingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveWageSettingResponse?: shared.RetrieveWageSettingResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
