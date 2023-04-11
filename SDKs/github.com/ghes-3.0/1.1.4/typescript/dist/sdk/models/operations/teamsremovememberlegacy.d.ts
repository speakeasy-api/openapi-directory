import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsRemoveMemberLegacyRequest extends SpeakeasyBase {
    teamId: number;
    username: string;
}
export declare class TeamsRemoveMemberLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
