import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum AreGamesInProgressFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class AreGamesInProgressRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: AreGamesInProgressFormatEnum;
}
export declare class AreGamesInProgressResponse extends SpeakeasyBase {
    areGamesInProgress200ApplicationJSONBoolean?: boolean;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
