import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConsumerV1CustomersCustomfieldsRequest extends SpeakeasyBase {
    /**
     * A true/false indicator to filter on custom fields used for lead questions
     */
    leadQuestions?: boolean;
    /**
     * id of business location, defaults to primary business location
     */
    locationId?: string;
}
export declare class GetConsumerV1CustomersCustomfieldsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customFieldDefinitionListViewModel?: shared.CustomFieldDefinitionListViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
