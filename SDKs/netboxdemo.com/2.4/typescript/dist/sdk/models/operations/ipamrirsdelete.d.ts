import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IpamRirsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this RIR.
     */
    id: number;
}
export declare class IpamRirsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
