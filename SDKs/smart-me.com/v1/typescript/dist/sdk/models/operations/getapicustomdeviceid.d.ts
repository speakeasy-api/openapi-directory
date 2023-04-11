import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiCustomDeviceIdRequest extends SpeakeasyBase {
    /**
     * The ID of the device
     */
    id: string;
}
export declare class GetApiCustomDeviceIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    customDeviceToPost?: shared.CustomDeviceToPost;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
