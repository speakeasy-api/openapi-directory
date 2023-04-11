import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPrefixExpandRequest extends SpeakeasyBase {
    /**
     * ID of entity to be contracted to URI, e.g "MGI:1"
     */
    id: string;
}
export declare class GetPrefixExpandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
