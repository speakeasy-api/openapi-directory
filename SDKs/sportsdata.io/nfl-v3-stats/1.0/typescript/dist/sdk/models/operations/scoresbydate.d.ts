import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ScoresByDateRequest extends SpeakeasyBase {
    /**
     * The date of the games.<br>Examples: <code>2021-SEP-12</code>, <code>2021-NOV-28</code>.
     */
    date: string;
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: string;
}
export declare class ScoresByDateResponse extends SpeakeasyBase {
    contentType: string;
    scores?: shared.Score[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
