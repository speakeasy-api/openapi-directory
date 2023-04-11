import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StadiumsRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: string;
}
export declare class StadiumsResponse extends SpeakeasyBase {
    contentType: string;
    stadiums?: shared.Stadium[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
