import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSpotRequest extends SpeakeasyBase {
    /**
     * A JSON object containing spot information
     */
    spotUpdateInput: shared.SpotUpdateInput;
    /**
     * Unique identifier
     */
    id: string;
}
export declare class UpdateSpotResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the modified resource
     */
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
