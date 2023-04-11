import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1ServicesIdBlocksRequest extends SpeakeasyBase {
    /**
     * Format YYYY-MM-DD. Filter on/before endDate
     */
    endDate?: Date;
    /**
     * id of service to list blocks for
     */
    id: string;
    /**
     * Page limit default 20, max 100
     */
    limit?: number;
    /**
     * Starting row of page, default 0
     */
    offset?: number;
    /**
     * Format YYYY-MM-DD. Filter blocks on/after startDate
     */
    startDate?: Date;
}
export declare class GetSetupV1ServicesIdBlocksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * service block object's
     */
    serviceBlockListViewModel?: shared.ServiceBlockListViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
