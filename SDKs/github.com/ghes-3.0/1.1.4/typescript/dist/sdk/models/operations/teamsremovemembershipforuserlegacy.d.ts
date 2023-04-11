import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsRemoveMembershipForUserLegacyRequest extends SpeakeasyBase {
    teamId: number;
    username: string;
}
export declare class TeamsRemoveMembershipForUserLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
