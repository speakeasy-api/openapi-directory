import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum LeagueHierarchyFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class LeagueHierarchyRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: LeagueHierarchyFormatEnum;
}
export declare class LeagueHierarchyResponse extends SpeakeasyBase {
    conferences?: shared.Conference[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
