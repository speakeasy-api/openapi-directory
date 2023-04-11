import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum UpcomingDfsSlatesByCompetitionFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class UpcomingDfsSlatesByCompetitionRequest extends SpeakeasyBase {
    /**
     * The Competition Id.
     *
     * @remarks
     * <br>Examples: <code>3</code>
     */
    competitionId: string;
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: UpcomingDfsSlatesByCompetitionFormatEnum;
}
export declare class UpcomingDfsSlatesByCompetitionResponse extends SpeakeasyBase {
    contentType: string;
    dfsSlates?: shared.DfsSlate[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
