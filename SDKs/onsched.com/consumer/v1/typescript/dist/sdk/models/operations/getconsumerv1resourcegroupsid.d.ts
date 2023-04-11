import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConsumerV1ResourcegroupsIdRequest extends SpeakeasyBase {
    /**
     * id of the resourceGroup object
     */
    id: string;
}
export declare class GetConsumerV1ResourcegroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceGroupViewModel?: shared.ResourceGroupViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
