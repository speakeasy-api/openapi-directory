import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum PlayByPlaySimulationFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayByPlaySimulationRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: PlayByPlaySimulationFormatEnum;
    /**
     * The number of plays to progress in this NFL live game simulation. Example entries are <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>150</code>, <code>200</code>, etc.
     */
    numberofplays: string;
}
export declare class PlayByPlaySimulationResponse extends SpeakeasyBase {
    contentType: string;
    playByPlays?: shared.PlayByPlay[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
