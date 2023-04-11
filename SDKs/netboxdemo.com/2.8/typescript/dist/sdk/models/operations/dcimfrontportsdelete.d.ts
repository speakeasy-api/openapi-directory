import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimFrontPortsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this front port.
     */
    id: number;
}
export declare class DcimFrontPortsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
