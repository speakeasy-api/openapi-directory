import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddSpotSetRequest extends SpeakeasyBase {
    /**
     * A JSON object containing spot set information
     */
    requestBody: any;
    /**
     * Unique identifier
     */
    id: string;
}
export declare class AddSpotSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the newly added resource
     */
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
