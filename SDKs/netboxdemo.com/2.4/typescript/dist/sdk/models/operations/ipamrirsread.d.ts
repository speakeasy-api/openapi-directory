import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamRirsReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this RIR.
     */
    id: number;
}
export declare class IpamRirsReadResponse extends SpeakeasyBase {
    contentType: string;
    rir?: shared.Rir;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
