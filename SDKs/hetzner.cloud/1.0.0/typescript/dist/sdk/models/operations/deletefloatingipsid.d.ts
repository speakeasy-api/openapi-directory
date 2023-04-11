import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteFloatingIpsIdRequest extends SpeakeasyBase {
    /**
     * ID of the Floating IP
     */
    id: number;
}
export declare class DeleteFloatingIpsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
