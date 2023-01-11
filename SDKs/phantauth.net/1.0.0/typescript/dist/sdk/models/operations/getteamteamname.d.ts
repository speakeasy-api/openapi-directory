import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTeamTeamnamePathParams extends SpeakeasyBase {
    teamname: string;
}
export declare class GetTeamTeamname200ApplicationJson extends SpeakeasyBase {
    atId?: string;
    logo?: string;
    logoEmail?: string;
    members?: any[];
    name?: string;
    profile?: string;
    sub: string;
}
export declare class GetTeamTeamnameRequest extends SpeakeasyBase {
    pathParams: GetTeamTeamnamePathParams;
}
export declare class GetTeamTeamnameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTeamTeamname200ApplicationJSONObject?: GetTeamTeamname200ApplicationJson;
}
