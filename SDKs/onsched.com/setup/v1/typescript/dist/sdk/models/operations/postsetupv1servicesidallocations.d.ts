import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1ServicesIdAllocationsRequest extends SpeakeasyBase {
    serviceAllocationInputModel?: shared.ServiceAllocationInputModel;
    /**
     * id of service object
     */
    id: string;
}
export declare class PostSetupV1ServicesIdAllocationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceAllocationViewModel?: shared.ServiceAllocationViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
