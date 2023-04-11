import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1TrendsRequest extends SpeakeasyBase {
    /**
     * Max number of results to return. Defaults to 10.
     */
    limit?: number;
}
export declare class GetApiV1TrendsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Domains that this instance is aware of.
     */
    tags?: shared.Tag[];
}
