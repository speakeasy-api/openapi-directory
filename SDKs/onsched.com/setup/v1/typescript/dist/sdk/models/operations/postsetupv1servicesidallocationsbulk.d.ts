import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1ServicesIdAllocationsBulkRequest extends SpeakeasyBase {
    serviceAllocationsInputModel?: shared.ServiceAllocationsInputModel;
    /**
     * id of service object
     */
    id: string;
}
export declare class PostSetupV1ServicesIdAllocationsBulkResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceAllocationViewModels?: shared.ServiceAllocationViewModel[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
