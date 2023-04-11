import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
 */
export declare enum TeamsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class TeamsRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
     */
    format: TeamsFormatEnum;
}
export declare class TeamsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    teams?: shared.Team[];
}
