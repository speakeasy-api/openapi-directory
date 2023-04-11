import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IpamVrfsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this VRF.
     */
    id: number;
}
export declare class IpamVrfsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
