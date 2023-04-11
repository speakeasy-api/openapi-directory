import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteFirewallsIdRequest extends SpeakeasyBase {
    /**
     * ID of the resource
     */
    id: number;
}
export declare class DeleteFirewallsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
