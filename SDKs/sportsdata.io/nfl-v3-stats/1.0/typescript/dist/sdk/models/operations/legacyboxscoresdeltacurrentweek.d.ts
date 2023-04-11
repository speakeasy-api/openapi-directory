import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum LegacyBoxScoresDeltaCurrentWeekFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class LegacyBoxScoresDeltaCurrentWeekRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: LegacyBoxScoresDeltaCurrentWeekFormatEnum;
    /**
     * Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:<br>
     *
     * @remarks
     *           <code>1</code> or <code>2</code>.
     *
     */
    minutes: string;
}
export declare class LegacyBoxScoresDeltaCurrentWeekResponse extends SpeakeasyBase {
    boxScores?: shared.BoxScore[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
