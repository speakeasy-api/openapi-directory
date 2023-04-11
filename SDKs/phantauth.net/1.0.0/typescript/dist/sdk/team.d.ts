import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Team is a group of users under a given name. For the purposes of identification and visualisation, the team object has its own properties (e.g. logo), the most important of which is the `members`, which contains the user objects of the team.
 */
export declare class Team {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a Team
     *
     * @remarks
     * Use this endpoint to generate a random group of users. The team is generated in a deterministic way, on the basis of the team name given as the path parameter.
     * In the case of identical team names, the endpoint will generate the same team object. The properties of the generated team object are randomly generated on the basis of the team name.
     * In lack of a team name, all calls generate a different team object to the randomly generated team name.
     */
    getTeamTeamname(req: operations.GetTeamTeamnameRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamTeamnameResponse>;
}
