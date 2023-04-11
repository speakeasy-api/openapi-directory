import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAMediaItemResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successfully retrieved
     */
    media?: shared.Media;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
