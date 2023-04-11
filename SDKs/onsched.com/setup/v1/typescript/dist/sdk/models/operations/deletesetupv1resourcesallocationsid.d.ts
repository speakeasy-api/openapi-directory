import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSetupV1ResourcesAllocationsIdRequest extends SpeakeasyBase {
    /**
     * id of resourceAllocation object
     */
    id: string;
}
export declare class DeleteSetupV1ResourcesAllocationsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceBlockViewModel?: shared.ResourceBlockViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
