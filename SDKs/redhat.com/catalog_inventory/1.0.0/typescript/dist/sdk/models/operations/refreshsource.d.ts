import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RefreshSourceRequest extends SpeakeasyBase {
    /**
     * ID of the resource
     */
    id: string;
}
export declare class RefreshSourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
