import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum ScoresByWeekSimulationFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ScoresByWeekSimulationRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: ScoresByWeekSimulationFormatEnum;
    /**
     * The number of plays to progress in this NFL live game simulation. Example entries are <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>150</code>, <code>200</code>, etc.
     */
    numberofplays: string;
}
export declare class ScoresByWeekSimulationResponse extends SpeakeasyBase {
    contentType: string;
    scores?: shared.Score[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
