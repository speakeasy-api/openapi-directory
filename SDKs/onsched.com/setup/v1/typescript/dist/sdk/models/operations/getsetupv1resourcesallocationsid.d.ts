import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1ResourcesAllocationsIdRequest extends SpeakeasyBase {
    /**
     * id of resourceAllocation object
     */
    id: string;
}
export declare class GetSetupV1ResourcesAllocationsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceAllocationViewModel?: shared.ResourceAllocationViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
