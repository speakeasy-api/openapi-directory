import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NewsByTeamRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: string;
    /**
     * Abbreviation of the team. Example: <code>WAS</code>.
     */
    team: string;
}
export declare class NewsByTeamResponse extends SpeakeasyBase {
    contentType: string;
    news?: shared.News[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
