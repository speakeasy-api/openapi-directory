import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConsumerV1ResourcesIdServicesRequest extends SpeakeasyBase {
    /**
     * id of resource object
     */
    id: number;
    /**
     * Page limit default 20, max 100
     */
    limit?: number;
    /**
     * Starting row of page, default 0
     */
    offset?: number;
}
export declare class GetConsumerV1ResourcesIdServicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * list of resource services
     */
    resourceServiceListViewModel?: shared.ResourceServiceListViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
