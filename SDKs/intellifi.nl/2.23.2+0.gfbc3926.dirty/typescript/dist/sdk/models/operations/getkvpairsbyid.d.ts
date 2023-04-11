import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetKvPairsByIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier
     */
    id: string;
}
export declare class GetKvPairsByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the subscription
     */
    keyValuePair?: shared.KeyValuePair;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
