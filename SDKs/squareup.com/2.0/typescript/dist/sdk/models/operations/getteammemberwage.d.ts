import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTeamMemberWageSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GetTeamMemberWageRequest extends SpeakeasyBase {
    /**
     * The UUID for the `TeamMemberWage` being retrieved.
     */
    id: string;
}
export declare class GetTeamMemberWageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getTeamMemberWageResponse?: shared.GetTeamMemberWageResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
