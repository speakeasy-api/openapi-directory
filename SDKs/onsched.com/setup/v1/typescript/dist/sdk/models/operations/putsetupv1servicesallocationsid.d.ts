import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1ServicesAllocationsIdRequest extends SpeakeasyBase {
    /**
     * Service allocation update model
     */
    serviceAllocationUpdateModel?: shared.ServiceAllocationUpdateModel;
    /**
     * id of serviceAllocation object
     */
    id: string;
}
export declare class PutSetupV1ServicesAllocationsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceAllocationViewModel?: shared.ServiceAllocationViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
