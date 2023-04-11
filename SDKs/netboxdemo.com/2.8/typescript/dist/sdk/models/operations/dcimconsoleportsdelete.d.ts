import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimConsolePortsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this console port.
     */
    id: number;
}
export declare class DcimConsolePortsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
