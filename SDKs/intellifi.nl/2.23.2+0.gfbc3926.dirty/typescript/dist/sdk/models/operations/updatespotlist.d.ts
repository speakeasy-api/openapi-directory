import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSpotListRequest extends SpeakeasyBase {
    /**
     * A JSON object containing spot list information
     */
    spotListInput: shared.SpotListInput;
    /**
     * Unique identifier
     */
    id: string;
}
export declare class UpdateSpotListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the modified resource
     */
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
