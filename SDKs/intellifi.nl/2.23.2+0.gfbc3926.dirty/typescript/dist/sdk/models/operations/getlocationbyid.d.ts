import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLocationByIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier
     */
    id: string;
}
export declare class GetLocationByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the location
     */
    location?: shared.Location;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
