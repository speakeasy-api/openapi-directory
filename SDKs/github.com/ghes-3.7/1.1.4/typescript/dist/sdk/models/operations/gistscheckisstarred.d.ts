import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GistsCheckIsStarredRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the gist.
     */
    gistId: string;
}
export declare class GistsCheckIsStarredResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Not Found if gist is not starred
     */
    gistsCheckIsStarred404ApplicationJSONObject?: Record<string, any>;
}
