import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProducersRequest extends SpeakeasyBase {
    /**
     * The external_id that is associated with a specific producer
     */
    externalId?: string;
}
/**
 * OK
 */
export declare class GetProducers200ApplicationJSON extends SpeakeasyBase {
    producers?: shared.ProducerV1[];
}
export declare class GetProducersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getProducers200ApplicationJSONObject?: GetProducers200ApplicationJSON;
}
