import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NewsRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: string;
}
export declare class NewsResponse extends SpeakeasyBase {
    contentType: string;
    news?: shared.News[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
