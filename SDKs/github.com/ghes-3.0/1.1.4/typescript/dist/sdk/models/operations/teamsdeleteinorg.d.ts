import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsDeleteInOrgRequest extends SpeakeasyBase {
    org: string;
    /**
     * team_slug parameter
     */
    teamSlug: string;
}
export declare class TeamsDeleteInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
