import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum CompetitionsLeaguesFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class CompetitionsLeaguesRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: CompetitionsLeaguesFormatEnum;
}
export declare class CompetitionsLeaguesResponse extends SpeakeasyBase {
    competitions?: shared.Competition[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
