import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum RaceResultsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class RaceResultsRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: RaceResultsFormatEnum;
    /**
     * Unique FantasyData Race ID.
     *
     * @remarks
     * Example:<code>1</code>, <code>2</code>, etc.
     */
    raceid: string;
}
export declare class RaceResultsResponse extends SpeakeasyBase {
    contentType: string;
    raceResult?: shared.RaceResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
