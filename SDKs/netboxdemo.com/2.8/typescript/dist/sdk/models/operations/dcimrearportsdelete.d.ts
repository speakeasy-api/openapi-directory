import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimRearPortsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this rear port.
     */
    id: number;
}
export declare class DcimRearPortsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
