import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConsumerV1AppointmentsCustomfieldsRequest extends SpeakeasyBase {
    /**
     * id of business location
     */
    locationId?: string;
}
export declare class GetConsumerV1AppointmentsCustomfieldsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customFieldDefinitionListViewModel?: shared.CustomFieldDefinitionListViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
