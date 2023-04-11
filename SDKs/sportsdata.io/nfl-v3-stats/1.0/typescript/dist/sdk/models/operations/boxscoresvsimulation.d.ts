import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum BoxScoresVSimulationFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class BoxScoresVSimulationRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: BoxScoresVSimulationFormatEnum;
    /**
     * The number of plays to progress in this NFL live game simulation. Example entries are <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>150</code>, <code>200</code>, etc.
     */
    numberofplays: string;
}
export declare class BoxScoresVSimulationResponse extends SpeakeasyBase {
    boxScoreV3s?: shared.BoxScoreV3[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
