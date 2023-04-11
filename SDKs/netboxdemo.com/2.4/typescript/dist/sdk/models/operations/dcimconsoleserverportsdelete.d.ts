import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimConsoleServerPortsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this console server port.
     */
    id: number;
}
export declare class DcimConsoleServerPortsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
