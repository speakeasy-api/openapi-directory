import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePrimaryIpsIdRequest extends SpeakeasyBase {
    /**
     * ID of the resource
     */
    id: number;
}
export declare class DeletePrimaryIpsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
