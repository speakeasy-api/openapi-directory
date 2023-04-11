import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamServicesReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this service.
     */
    id: number;
}
export declare class IpamServicesReadResponse extends SpeakeasyBase {
    contentType: string;
    service?: shared.Service;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
