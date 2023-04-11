import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IpamServicesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this service.
     */
    id: number;
}
export declare class IpamServicesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
