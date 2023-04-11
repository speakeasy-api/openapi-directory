import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateLocationRequest extends SpeakeasyBase {
    /**
     * A JSON object containing location information
     */
    locationInput: shared.LocationInput;
    /**
     * Unique identifier
     */
    id: string;
}
export declare class UpdateLocationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the modified resource
     */
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
