import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTeamTeamnameRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     * The identifier or email address of the team; it is integrated in the `sub` property and is the basis of the other generated properties.
     *
     */
    teamname: string;
}
/**
 * OK
 */
export declare class GetTeamTeamname200ApplicationJSON extends SpeakeasyBase {
    /**
     * URL of the Teams's JSON representation.
     */
    atId?: string;
    /**
     * The URL of the team logo, which can be customized by the gravatar associated with the email address in the `logo_email` property.
     */
    logo?: string;
    /**
     * The email address of the team, either generated or provided in the `sub` property. The team logo can be customized by the use of the gravater associated with this email address.
     */
    logoEmail?: string;
    /**
     * The user objects that generate a team member.
     */
    members?: any[];
    /**
     * The displayed team name.
     */
    name?: string;
    /**
     * The URL of the Team profile.
     */
    profile?: string;
    /**
     * The name or email address of a given team. The team properties and team members are generated from this name. If you provide an email address, you can customize the team logo by the use of the gravatar associated with the email address.
     */
    sub: string;
}
export declare class GetTeamTeamnameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getTeamTeamname200ApplicationJSONObject?: GetTeamTeamname200ApplicationJSON;
}
