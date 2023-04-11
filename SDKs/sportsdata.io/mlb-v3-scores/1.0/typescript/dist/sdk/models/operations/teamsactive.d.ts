import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum TeamsActiveFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class TeamsActiveRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: TeamsActiveFormatEnum;
}
export declare class TeamsActiveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    teams?: shared.Team[];
}
