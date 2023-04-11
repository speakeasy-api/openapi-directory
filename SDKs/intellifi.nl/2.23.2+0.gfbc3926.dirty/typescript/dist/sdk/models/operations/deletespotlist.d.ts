import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSpotListRequest extends SpeakeasyBase {
    /**
     * Unique identifier
     */
    id: string;
}
export declare class DeleteSpotListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the deleted resource
     */
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
