import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimPowerPortsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this power port.
     */
    id: number;
}
export declare class DcimPowerPortsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
