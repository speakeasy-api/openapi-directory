import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum CompetitionHierarchyLeagueHierarchyFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class CompetitionHierarchyLeagueHierarchyRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: CompetitionHierarchyLeagueHierarchyFormatEnum;
}
export declare class CompetitionHierarchyLeagueHierarchyResponse extends SpeakeasyBase {
    areas?: shared.Area[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
