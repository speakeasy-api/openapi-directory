import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1ResourcesAllocationsIdRequest extends SpeakeasyBase {
    /**
     * Resource allocation update model
     */
    resourceAllocationUpdateModel?: shared.ResourceAllocationUpdateModel;
    /**
     * id of resourceAllocation object
     */
    id: string;
}
export declare class PutSetupV1ResourcesAllocationsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceBlockViewModel?: shared.ResourceBlockViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
