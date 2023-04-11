import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1ResourcesIdAllocationsRequest extends SpeakeasyBase {
    resourceAllocationInputModel?: shared.ResourceAllocationInputModel;
    /**
     * id of resource object
     */
    id: string;
}
export declare class PostSetupV1ResourcesIdAllocationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceBlockViewModel?: shared.ResourceBlockViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
