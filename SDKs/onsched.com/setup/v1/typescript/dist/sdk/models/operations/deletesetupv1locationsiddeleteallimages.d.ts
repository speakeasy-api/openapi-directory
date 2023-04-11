import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSetupV1LocationsIdDeleteallimagesRequest extends SpeakeasyBase {
    id: string;
    uppercase?: boolean;
}
export declare class DeleteSetupV1LocationsIdDeleteallimagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    deleteSetupV1LocationsIdDeleteallimages200ApplicationJSONBoolean?: boolean;
}
