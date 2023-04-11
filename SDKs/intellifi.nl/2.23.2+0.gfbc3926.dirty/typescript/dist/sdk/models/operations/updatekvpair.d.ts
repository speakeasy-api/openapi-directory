import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateKvPairRequest extends SpeakeasyBase {
    /**
     * A JSON object containing Key-value information
     */
    keyValuePairUpdate: shared.KeyValuePairUpdate;
    /**
     * Unique identifier
     */
    id: string;
}
export declare class UpdateKvPairResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the modified resource
     */
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
