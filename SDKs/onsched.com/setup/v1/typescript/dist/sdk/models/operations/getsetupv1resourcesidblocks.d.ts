import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1ResourcesIdBlocksRequest extends SpeakeasyBase {
    /**
     * YYYY-MM-DD, filter on/before endDate
     */
    endDate?: Date;
    /**
     * id of resource to list blocks for
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
     * YYYY-MM-DD, filter blocks on/after startDate
     */
    startDate?: Date;
}
export declare class GetSetupV1ResourcesIdBlocksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * resource block object's
     */
    resourceBlockListViewModel?: shared.ResourceBlockListViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
