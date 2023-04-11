import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConsumerV1ServicegroupsIdRequest extends SpeakeasyBase {
    /**
     * id of the serviceGroup object
     */
    id: number;
}
export declare class GetConsumerV1ServicegroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceGroupViewModel?: shared.ServiceGroupViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
