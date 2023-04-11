import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOneApplicationRequest extends SpeakeasyBase {
    /**
     * The ID of the application.
     */
    applicationId: string;
}
export declare class GetOneApplicationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
