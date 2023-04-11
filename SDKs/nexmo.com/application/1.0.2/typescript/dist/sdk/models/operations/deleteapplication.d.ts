import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteApplicationRequest extends SpeakeasyBase {
    /**
     * The ID allocated to your application by Nexmo.
     */
    appId: string;
}
export declare class DeleteApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
