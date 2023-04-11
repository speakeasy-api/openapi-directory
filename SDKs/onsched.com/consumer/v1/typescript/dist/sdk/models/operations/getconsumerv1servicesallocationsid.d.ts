import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConsumerV1ServicesAllocationsIdRequest extends SpeakeasyBase {
    /**
     * id of serviceAllocation object
     */
    id: string;
}
export declare class GetConsumerV1ServicesAllocationsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceAllocationViewModel?: shared.ServiceAllocationViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
