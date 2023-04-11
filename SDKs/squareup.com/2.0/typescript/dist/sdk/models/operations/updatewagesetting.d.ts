import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateWageSettingSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class UpdateWageSettingRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    updateWageSettingRequest: shared.UpdateWageSettingRequest;
    /**
     * The ID of the team member for which to update the `WageSetting` object.
     */
    teamMemberId: string;
}
export declare class UpdateWageSettingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateWageSettingResponse?: shared.UpdateWageSettingResponse;
}
